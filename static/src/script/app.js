/**
 * Created by Jiavan on 2017/6/14.
 */

require.config({
    paths: {
        'jquery': '../vendor/jquery.min',
        'semantic': '../vendor/semantic/semantic.min',
        'template': '../tpl/build/template'
    },
    shim: {
        'semantic': {
            deps: ['jquery']
        },
        'template': {
            deps: []
        }
    }
});

require(['semantic', 'routes'], function (semantic, router,) {
    router.register();
});

