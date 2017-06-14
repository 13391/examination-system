/**
 * Created by Jiavan on 2017/6/15.
 */
define(function (require) {

    function bindEvent() {
        var template = require('../../tpl/build/template');
        $(document).on('click', '.question-next', function () {
            var html = template('question', {});
            $('.layout-examination .question').html(html);
        });

        $(document).on('click', '.submit-answer', function () {
            $('.submit-answer-confirm').modal('show');
        });
    }

    return {
        bindEvent: bindEvent
    };
});