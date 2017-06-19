/**
 * Created by Jiavan on 2017/6/14.
 */

/**
 * Define application routes
 */
define(function (require) {

    var Router = require('./router');
    var router = new Router();
    router.init();

    function register() {
        var template = require('template');

        router.route('/signInOrUp', function () {
            var html = template('signInOrUp', {

            });
            $('#app').html(html);
            var sign = require('./route/signInOrUp');
            sign.bindEvent();
        });

        router.route('/examination', function () {
            var html = template('examination', {});
            $('#app').html(html);
            var examination = require('./route/examination');
            examination.bindEvent();
        });

        router.route('/examinationList', function () {
            var html = template('examination-list', {});
            $('#app').html(html);
            var examList = require('./route/examinationList');
            examList.bindEvent();
        });

    }

    return {
        register: register,
        router: router
    };
});