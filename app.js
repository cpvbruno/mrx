'use strict';

angular
    .module('mr', [
        'ngRoute',
        'ngCookies',
        'ngMask',
        'ngMessages',
        'duScroll'
    ])
    .config(routesConfig)
    .config(['$httpProvider', resetHeaders]);


function routesConfig($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html'
        });
}

function resetHeaders($httpProvider) {
    //Reset headers to avoid OPTIONS request (aka preflight)
    $httpProvider.defaults.headers.common = {};
    $httpProvider.defaults.headers.post = {};
    $httpProvider.defaults.headers.put = {};
    $httpProvider.defaults.headers.patch = {};
}
