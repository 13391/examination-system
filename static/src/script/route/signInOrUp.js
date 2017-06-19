/**
 * Created by Jiavan on 2017/6/14.
 */
define(function (require) {

    function bindEvent() {
        $(document).on('click', '.button.sign-up', function () {
            $('.sign.sign-in').removeClass('visible').hide();
            $('.sign.sign-up').transition('horizontal flip');
        });

        $(document).on('click', '.button.sign-in', function () {
            $('.sign.sign-up').removeClass('visible').hide();
            $('.sign.sign-in').transition('horizontal flip');
        });

        $(document).on('click', '.button-sign-up', function () {
            var data = $('.sign.sign-up form').serialize();
            $.ajax({
                url: '/api/user/signup',
                type: 'POST',
                data: data,
                success: function (res) { 
                    if (res.status === 1) {
                        // sign up success

                    } else {
                        // sign up error
                        alert(res.message);
                    }
                }
            });
        });

        $(document).on('click', '.button-sign-in', function () {
            var data = $('.sign.sign-in form').serialize();
            $.ajax({
                url: '/api/user/login',
                type: 'POST',
                data: data,
                success: function (res) { 
                    var routes = require('../routes');
                    var router = routes.router;
                    if (res.status === 1) {
                        // login success
                        window.sessionStorage.setItem('isLogin', '1');
                        router.push('/examinationList');
                    } else if (res.status === 2) {
                        router.push('/examinationList');
                    } else {
                        alert(res.message);
                    }
                }
            });
        });
    }

    return {
        bindEvent: bindEvent
    };
});