const Koa = require('koa');
const path = require('path');
const static = require('koa-static');
const config = require('./util/config');
const Router = require('koa-router');
const { api } = require('./router/router');
const session = require('koa-session-minimal');
const MySQLSession = require('koa-mysql-session');

const app = new Koa();
const staticPath = '../static';

let sessionStore = new MySQLSession({
    user: config.DB_USER,
    password: config.DB_PWD,
    database: config.DB_NAME,
    host: config.DB_HOST
});
let cookie = {
    maxAge: '',
    expires: '',
    path: '',
    domain: '',
    httpOnly: '',
    overwrite: '',
    secure: '',
    sameSite: '',
    signed: ''
}
// Session middleware
app.use(session({
    key: 'SESSION_ID',
    store: sessionStore,
    cookie: cookie
}));

// Register static middleware
app.use(static(path.join(__dirname, staticPath)));

let router = new Router();
router.use('/api', api.routes(), api.allowedMethods());
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
console.log(`App is running http://127.0.0.1:${config.APP_LISTEN_PORT}/`);