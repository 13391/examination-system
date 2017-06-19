/**
 * Created by Jiavan on 2017/6/15.
 */
define(function (require) {
    function bindEvent() {
        $(document).on('click', '.examination-start', function () {
            var routes = require('../routes');
            var router = routes.router;
            router.push('/examination');
        });
    }

    return {
        bindEvent: bindEvent
    };
});