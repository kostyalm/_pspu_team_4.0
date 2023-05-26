export default class UserDto {
    email;
    id;
    isActivated;
    roles;

    constructor(model) {
        this.email = model.email;
        this.id = model.id;
        this.isActivated = model.isActivated;
        this.roles = model.roles;
    }
}