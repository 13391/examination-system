function auth(ctx, admin) {
    if (ctx.session && ctx.session.isLogin && ctx.session.uid) {
        if (arguments.length === 1) {
            return true
        }

        if (arguments.length == 2 && admin === true && ctx.session.admin) {
            return true
        } else {
            return false;
        }
    }
    return false;
}

module.exports = {auth};