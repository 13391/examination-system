const crypto = require('crypto');

/**
 * Parse chunk data
 * @param {any} ctx koa context
 * @returns 
 */
function parsePostData(ctx) {
    return new Promise((resolve, reject) => {
        try {
            let postData = '';
            ctx.req.addListener('data', (data) => {
                postData += data;
            });
            ctx.req.addListener('end', (data) => {
                resolve(parseQueryStr(postData));
            })
        } catch (error) {
            reject(error);
        }
    });
}

/**
 * Parse query format data to json
 * @param {*} queryStr 
 */
function parseQueryStr(queryStr) {
    let queryData = {};
    let queryStrList = queryStr.split('&');
    for (let [index, queryStr] of queryStrList.entries()) {
        let itemList = queryStr.split('=');
        queryData[itemList[0]] = decodeURIComponent(itemList[1]);
    }
    return queryData;
}

/**
 * @param {*} text 
 */
let md5 = (text) => {
    let res = '';
    try {
        res = crypto.createHash('md5').update(text).digest('hex');
    } catch(error) {
        console.log(error);
    }
    
    return res;
};

module.exports = {
    parsePostData,
    parseQueryStr,
    md5
};