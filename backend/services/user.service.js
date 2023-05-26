import UserModel from "../models/user-model.js";
import bcrypt from "bcrypt";
import {v4} from "uuid";
import emailService from "./email.service.js";
import tokenService from "./token.service.js";
import UserDto from "../dto/user.dto.js";
import ApiErrors from "../errors/ApiErrors.js";
import userModel from "../models/user-model.js";

class UserService {
    async registration(email, password) {
        const candidate = await UserModel.findOne({email});

        if (candidate) throw ApiErrors.BadRequest('User already exists');

        const encryptedPassword = await bcrypt.hash(password, 3);
        const activationLink = v4(); // рандомная ссылка для активации

        const user = await UserModel.create({email, password: encryptedPassword, activationLink});
        await emailService.sentActivationLink(email, activationLink);

        const userDto = new UserDto(user);
        const tokens = await tokenService.generateToken({...userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {...tokens, user: userDto}
    }

    async activate(activationLink) {
        const user = await userModel.findOne({activationLink: activationLink});
        if (!user) {
            throw ApiErrors.BadRequest("Invalid activation link");
        }
        user.isActivated = true;
        user.save();
    }


    async login(email, password) {
        const user = await UserModel.findOne({email: email});
        if (!user) {
            throw ApiErrors.BadRequest("Invalid email or password");
        }
        const checkPass = await bcrypt.compare(password, user.password);
        if (!checkPass) {
            throw ApiErrors.BadRequest("Invalid email or password")
        }
        const userDto = new UserDto(user);
        const tokens = await tokenService.generateToken({...userDto});

        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {...tokens, user: userDto};
    }

    async logout(refreshToken) {
        return await tokenService.removeToken(refreshToken);
    }

    async refresh(refreshToken) {
        if (!refreshToken) {
            throw ApiErrors.Unauthorized();
        }

        const userData = await tokenService.validateRefreshToken(refreshToken);
        const tokenFromDb = await tokenService.findToken(refreshToken);
        if (!userData || ! tokenFromDb) {
            throw ApiErrors.Unauthorized();
        }

        const user = await UserModel.findById(userData.id);
        const userDto = new UserDto(user);
        const tokens = await tokenService.generateToken({...userDto});

        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {...tokens, user: userDto};
    }

    async getUsers(id = '') {
        if (id) {
            return userModel.findById(id);
        }
        return userModel.find();
    }

    async setUserRole(userId, role) {
        const user = await UserModel.findById(userId);
        if (!user) {
            throw ApiErrors.BadRequest("There are no users with this id");
        }
        if (user.roles.includes(role)) {
            return user;
        }

        user.roles = [...user.roles, role];
        await user.save();
        const userDto = new UserDto(user);
        const tokens = await tokenService.generateToken({...userDto});

        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {...tokens, user: userDto};
    }

    async deleteUser(userId) {
        const user = await UserModel.findById(userId);
        if (!user) throw  ApiErrors.BadRequest("There are no users with this id");

        return user.deleteOne({id: userId});
    }
}

export default new UserService();