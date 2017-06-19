const parse = require('../util/parse');
const {auth} = require('../util/auth');
const {query} = require('../util/async-db');
const {ctxError, ctxOk} = require('../util/context');

module.exports = async (ctx) => {

    if (auth(ctx)) {
        ctx.body = ctxError('You have already login in!', 2);
    } else {
        let formData = await parse.parsePostData(ctx) || {};
        let uid = formData.uid || '';
        let md5pwd = parse.md5(formData.upwd) || '';
        let sql = `select upwd, uname from user where uid='${uid}'`;
        let res = await query(sql);

        if (res.length) {
            if (res[0].upwd === md5pwd) {
                // login success
                let session = ctx.session;
                session.isLogin = true;
                session.uname = res[0].uname;
                session.uid = uid;

                ctx.body = ctxOk({
                    uid: uid,
                    uname: session.uname
                });
            } else {
                ctx.body = ctxError('Username or password error');
            }
        } else {
            ctx.body = ctxError('This user is not registered');
        }
    }
};