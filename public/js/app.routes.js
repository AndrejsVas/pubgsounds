var app = angular.module('route' , ['ui.router']);
app.config(['$stateProvider'  , '$urlRouterProvider' ,'$locationProvider',function($stateProvider,$urlRouterProvider
,$locationProvider){
    $urlRouterProvider.otherwise('/weapons');
    $locationProvider.html5Mode(true);
    $stateProvider
        .state('about' , {
            url : '/about' ,
            templateUrl : 'app/about/about.html' ,
            controller : 'aboutController',
            controllerAs : 'aboutController'
        })
        .state('weapons' , {
            url : '/weapons' ,
            templateUrl : 'app/weapons/weapons.html'
        })
}]);