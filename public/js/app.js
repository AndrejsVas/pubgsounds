angular.module('app', [])
    .controller('maincontroller', function () {

        var vm = this;
        vm.weapons = [];
		vm.weaponCategories = ["Pistols", "Shotguns", "Submachine guns", "Assault rifles", "Designated marksman rifles", "Sniper rifles", "Light machine guns"];


        vm.init = function () {
            var weapons = ["M416", "R45"]
            /*"R1895", "P92", "P18C", "SAWED_OFF", "S12K", "S1897", "S686", "MICRO_UZI", "KRISS_VECTOR", "UMP9", "TOMMY_GUN", "M16A4", "M416", "QBZ95", "SCAR_L", "AKM", "VSS", "MINI14", "SKS", "SLR", "WIN94", "KARABINER_98_KURZ", "M24", "DP_28"];																				*/
            var weaponRangeUnsilenced = ["600", "300"];
            var weaponRangeSilenced = ["300", "0"];
            var weaponCategory = ["Assault rifles", "Pistols"];
/*          Variable to help html determine what kind of silencer the weapon has
            1- only unsilenced
            2- silenced + unsilenced
            3 - only silenced*/
            var weaponSilencedType = [2 , 1];
/*          Variable to determine what kind of firemodes the weapon has
            1 - only single
            2 - single + auto
            3- only auto
            4 - single + burst  +auto
            5 - single + burst*/
            var weaponFireModes = [2,1];
            var i;
            for (i = 0; i < weapons.length; i++) {
				vm.weapons[i] = new Object();
				vm.weapons[i].weaponName = weapons[i];
				vm.weapons[i].firemode = "single";
				vm.weapons[i].rangeBar = 0;
                vm.weapons[i].minRange = 0;
                vm.weapons[i].maxRangeUnsilenced = weaponRangeUnsilenced[i];
                vm.weapons[i].maxRangeSilenced = weaponRangeSilenced[i];
                vm.weapons[i].issilenced = '0';
                vm.weapons[i].weaponCategory = weaponCategory[i];
                vm.weapons[i].weaponSilencedType = weaponSilencedType[i];
                vm.weapons[i].weaponFireModes = weaponFireModes[i]; 
            }
        };

        vm.init();


        vm.redrawReload = function (weapon, isSilenced) {
            weapon.rangeBar = 0;
            vm.reloadAudio(weapon);
            vm.redrawRange(weapon, isSilenced);
        };

        vm.redrawRange = function (weapon, isSilenced) {
            angular.element(document.querySelector("#"+weapon.weaponName+"RangeBar"))[0].min = weapon.rangemin;
            angular.element(document.querySelector("#"+weapon.weaponName+"RangeBar"))[0].max = isSilenced;
            angular.element(document.querySelector("#"+weapon.weaponName+"AudibleRange"))[0].innerHTML = "Audible range 0-" + isSilenced;
        };
        vm.reloadAudio = function (weapon) {

            angular.element(document.querySelector("#rangeBox" + weapon.weaponName))[0].innerHTML = 'Current range is : ' + weapon.rangeBar + 'm';
            var audio = angular.element(document.querySelector('#audio' + weapon.weaponName))[0];
            var source = angular.element(document.querySelector('#audioSource' + weapon.weaponName))[0];
            source.src = 'audio/' + weapon.weaponName + '-' + weapon.rangeBar + '-' + weapon.issilenced + '-' + weapon.firemode + '.mp3';
            audio.load();
        };


    });