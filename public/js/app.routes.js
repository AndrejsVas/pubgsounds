var app = angular.module('route' , ['ui.router']);
app.config(['$stateProvider'  , '$urlRouterProvider' ,function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/weapons');
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