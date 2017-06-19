/**
 * User sign up
 */

const parse = require('../util/parse');
const {auth} = require('../util/auth');
const {query} = require('../util/async-db');
const {ctxError, ctxOk} = require('../util/context');

module.exports = async (ctx) => {
    if (!auth(ctx)) {
        let formData = await parse.parsePostData(ctx) || {};
        let uid = formData.uid || '';
        let uname = formData.uname || '';
        let md5pwd = parse.md5(formData.upwd) || '';

        let sql = `select * from user where uid='${formData.uid}'`;
        let res = await query(sql);
        
        if (res.length) {
            ctx.body = ctxError('You have already sign up, please login!');
        } else {
            if (uid && uname && formData.upwd) {
                sql = `insert into user(uid, uname, upwd) values('${uid}', '${uname}', '${md5pwd}')`;
                res = await query(sql);
                if (res && res.affectedRows) {
                    ctx.body = ctxOk();
                } else {
                    ctx.body = ctxError();
                }
            } else {
                ctx.body = ctxError('Some form k-v is null!');
            }
        }
    } else {
        ctx.body = ctxError('You have already login in!');
    }
};