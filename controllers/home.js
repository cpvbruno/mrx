angular
    .module('mr')
    .controller('HomeController', ['$location', 'helperService', '$cookies', '$window','$http', HomeController])
    .config(['$routeProvider', routes]);

function routes($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeController',
            controllerAs: 'Home'
        });
}

function HomeController($location, helperService, $cookies, $window,$http) {
  var vm = this;

  vm.nav = helperService.linkOptions;
}
