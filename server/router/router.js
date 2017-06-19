const Router = require('koa-router');
const api = new Router();

api.post('/user/login', require('../controller/login'));
api.post('/user/signup', require('../controller/signup'));

api.get('/__admin__', async (ctx) => {
    
});

module.exports = {api};