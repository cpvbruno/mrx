angular
    .module('mr')
    .controller('HomeController', ['$location', 'helperService', '$cookies', '$window','$http','$document', HomeController])
    .config(['$routeProvider', routes]);

function routes($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeController',
            controllerAs: 'Home'
        });
}

function HomeController($location, helperService, $cookies, $window,$http, $document) {
  var vm = this;

  vm.nav = helperService.linkOptions;
   vm.scrollTo = scrollTo;

   function scrollTo(element) {
     var duration = 1000;
     var offset = 70;
        var someElement = angular.element(document.getElementById(element));
        $document.scrollToElement(someElement, offset, duration);
   }

}
