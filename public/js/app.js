angular.module('app', ['weaponsService'])
    .controller('maincontroller', function (Weapon) {

        var vm = this;
        vm.weaponsLoaded =false;
        vm.weapons = [];
        vm.weaponCategories = ["Pistols", "Shotguns", "Submachine guns", "Assault rifles", "Designated marksman rifles", "Sniper rifles", "Light machine guns", "Miscellaneous"];
        Weapon.getAll()
            .then(function successcallback(response) {
                    vm.weapons = response.data;
                    vm.weaponsLoaded = true;
                }
                , function errorcallback(err) {
                    console.log(err);
                });


        vm.redrawReload = function (weapon, isSilenced) {

            if (typeof isSilenced != 'undefined') {
                weapon.rangeBar = 0;
                vm.redrawRange(weapon, isSilenced);
            }
            vm.reloadAudio(weapon);
        };

        vm.redrawRange = function (weapon, isSilenced) {
            angular.element(document.querySelector("#RangeBar" + weapon._id))[0].min = weapon.rangemin;
            angular.element(document.querySelector("#RangeBar" + weapon._id))[0].max = isSilenced;
            angular.element(document.querySelector("#AudibleRange" + weapon._id))[0].innerHTML = "Audible range 0-" + isSilenced;
        };
        vm.reloadAudio = function (weapon) {

            angular.element(document.querySelector("#rangeBox" + weapon._id))[0].innerHTML = 'Current range is : ' + weapon.rangeBar + 'm';
            var audio = angular.element(document.querySelector('#audio' + weapon._id))[0];
            var source = angular.element(document.querySelector('#audioSource' + weapon._id))[0];
            source.src = 'audio/' + weapon.weaponName + '-' + weapon.rangeBar + '-' + weapon.issilenced + '-' + weapon.firemode + '.mp3';
            audio.load();
        };

        vm.number = 6;
        vm.getNumber = function(num) {
            return new Array(num);
        }


    });