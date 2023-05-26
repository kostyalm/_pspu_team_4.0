# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

Команда PSPU_TEAM_3.0

Стек технологий:
front-end: React JS
back-end: express js, node js, njinx
testing: Postman (Rest API)
+docker, docker-compose

Выполнено на 23:10

front-end:
Доступные роуты:/,/profile,/product
I. Управление пользователями:

1. login
2. register
3. logout
4. getUsers
5. setRole

back-end:
I. Сервисы:

1. article -> getAll, getNew, update, delete
2. product -> getAllProducts, getProductById,newProduct, deleteProduct, updateProduct
3. token -> generateToken, saveToken, removeToken, validateAccessToken, validateRefreshToken, findToken
4. user -> regestration, activate, login, logout, refresh, getUsers, setUserRole, deleteUser

II. Контроллеры:

1. article -> getAll, getByID, addNew, update, delete
2. product -> getAllProducts, getProductById,newProduct, deleteProduct, updateProduct
3. user -> regestration, activate, login, logout, refresh, getUsers, setUserRole, deleteUser

III. API errors:

1. Unauthorized
2. BadRequest
3. Forbidden

IV. MiddleWares:

1. ErorrMiddleWare
2. RoleMiddleWare -> adminOnly, sellerOnly, getRoles
3. AuthMiddleWear

V. Models:

1. article
2. product
3. token
4. user

VI. Routes:

1. Article
2. Product
3. User

system administration:
Был создан балансировщик nginx с проксированием на 9 node, которые сделаны на сервере, ноды представляют из себя docker контейнер full back-end.
Был использован ssl сертификат на хостинг URL: https://farm.vp-pspu.cf
При создании docker контейнеров был использован docker-compose для запуска всего сервера который предстовлял из себя базы данных - mango_db, 9 нод.
