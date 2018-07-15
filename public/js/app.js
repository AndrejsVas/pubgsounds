angular.module('app', [])
    .controller('maincontroller', function () {

        var vm = this;
        vm.weapons = [];
		vm.weaponCategories = ["Pistols", "Shotguns", "Submachine guns", "Assault rifles", "Designated marksman rifles", "Sniper rifles", "Light machine guns", "Miscellaneous"];


        vm.init = function () {
            var weapons = ["R1895", "P92", "P18C", "R45", "P1911", "SAWED OFF", "S12K", "S1897", "S686", "MICRO UZI", "KRISS VECTOR", "UMP9", "TOMMY GUN", "M16A4", "M416", "QBZ95", "SCAR-L", "AKM", "VSS", "MINI14", "SKS", "SLR", "WIN94", "KARABINER 98 KURZ", "M24", "DP 28" , "CROSSBOW"];           																		
            var weaponRangeUnsilenced = ["600", "300", "400" ,"x", "400" ,"x" , "x" ,     "500" , "800"   , "x" ,         "x"           ,"x" ,   "x"       , "x"     ,"x"    ,"x"    , "500",  "600" ,  "x",   "500",   "600",   "x",   "x"   ,   "x"            ,   "1000" ,   "x" ,     "0"];
            var weaponRangeSilenced = ["300", "0", "200" , "x" , "100" ,"x" ,   "x" ,      "0" ,  "x"   , "x" ,         "x"           ,"x" ,   "x"       , "x"     ,"x"    ,"x"    , "300",     "300" ,  "x",  "300",   "300",   "x",   "x"   ,   "x"           ,   "500"   ,   "x"  ,   "0"];
            var weaponCategory = ["Pistols", "Pistols", "Pistols", "Pistols", "Pistols", "Shotguns", "Shotguns", "Shotguns", "Shotguns", "Submachine guns", "Submachine guns", "Submachine guns", "Submachine guns", "Assault rifles", "Assault rifles", "Assault rifles", "Assault rifles", "Assault rifles", "Designated marksman rifles", "Designated marksman rifles", "Designated marksman rifles", "Designated marksman rifles", "Sniper rifles", "Sniper rifles", "Sniper rifles", "Light machine guns", "Miscellaneous"];
/*          Variable to help html determine what kind of silencer the weapon has
            1 - only unsilenced
            2 - silenced + unsilenced
            3 - only silenced*/
            var weaponSilencedType = [2, 2, 2, 1, 2, 1, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 1, 2, 2, 1, 1];
/*          Variable to determine what kind of firemodes the weapon has
            1 - only single
            2 - single + auto
            3 - only auto
            4 - single + burst + auto
            5 - single + burst*/
            var weaponFireModes = [1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 4, 4, 2, 5, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 3, 1];
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
            if (typeof isSilenced != 'undefined'){
                vm.redrawRange(weapon, isSilenced);
            }
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