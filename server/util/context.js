/**
 * Context output
 * @param {*} message 
 * @param {*} status 
 */

let ctxError = (message, status) => {
    return {
        status: status || -1,
        message: message || 'error'
    };
}

let ctxOk = (data, message, status) => {
    return {
        status: status || 1,
        message: message || 'ok',
        data: data || {}
    };
};

module.exports = {
    ctxError,
    ctxOk
};