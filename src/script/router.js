/**
 * Created by Jiavan on 2017/6/14.
 */

/**
 * A simple front-end router implementation
 */
define(function () {
    function Router() {
        this.routes = {};
        this.currentUrl = '';
    }

    Router.prototype.constructor = 'Router';

    // Register the route
    Router.prototype.route = function (path, callback) {
        this.routes[path] = callback || (function () {});
    };

    Router.prototype.refresh = function () {
        this.currentUrl = location.hash.slice(1) || '/';
        this.routes[this.currentUrl] && this.routes[this.currentUrl]();
    };

    Router.prototype.push = function (path) {
        path && (location.hash = '#' + path);
    };

    Router.prototype.init = function () {
        window.addEventListener('load', this.refresh.bind(this), false);
        window.addEventListener('hashchange', this.refresh.bind(this), false);
    };

    return Router;
});