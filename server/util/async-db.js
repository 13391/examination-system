const mysql = require('mysql');
const config = require('./config');

const pool = mysql.createPool({
    host: config.DB_HOST,
    port: config.DB_PORT,
    user: config.DB_USER,
    password: config.DB_PWD,
    database: config.DB_NAME
});

let query = (sql, values) => {
    console.log(sql);
    return new Promise((resolve, reject) => {
        pool.getConnection((error, connection) => {
            if (error) {
                reject(error);
            } else {
                connection.query(sql, values, (error, result) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(result);
                    }
                });
                connection.release();
            }
        });
    });
};

module.exports = {query};