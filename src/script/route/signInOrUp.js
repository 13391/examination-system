/**
 * Created by Jiavan on 2017/6/14.
 */
define(function () {

    function  bindEvent() {
        $(document).on('click', '.button.sign-up', function () {
            $('.sign.sign-in').removeClass('visible').hide();
            $('.sign.sign-up').transition('horizontal flip');
        });

        $(document).on('click', '.button.sign-in', function () {
            $('.sign.sign-up').removeClass('visible').hide();
            $('.sign.sign-in').transition('horizontal flip');
        });
    }

    return {
        bindEvent: bindEvent
    };
});