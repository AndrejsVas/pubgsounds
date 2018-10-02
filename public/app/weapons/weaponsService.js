angular.module('weaponsService', [])
    .factory('Weapon', function ($http) {
        var weaponFactory = {};

        weaponFactory.getAll = function(){
            return $http.get('/api/weapons');
        };

        return weaponFactory;
    });