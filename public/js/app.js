angular.module('app', [])
    .controller('maincontroller', function () {

        var vm = this;
        vm.weapons = {};


        vm.init = function () {
            var weapons = ["M416", "R45"]
            /*"R1895", "P92", "P18C", "SAWED_OFF", "S12K", "S1897", "S686", "MICRO_UZI", "KRISS_VECTOR", "UMP9", "TOMMY_GUN", "M16A4", "M416", "QBZ95", "SCAR_L", "AKM", "VSS", "MINI14", "SKS", "SLR", "WIN94", "KARABINER_98_KURZ", "M24", "DP_28"];																				*/
            var weaponRangeUnsilenced = ["600", "100"];
            var weaponRangeSilenced = ["300", "100"];
            var weaponCategory = ["ar", "pistol"];
/*            Variable to help html determine what kind of silencer the weapon has
            1- only unsilenced
            2- silenced + unsilenced
            3 - only silenced*/
            var weaponSilencedType = [2 , 1];
/*            Variable to determine what kind of firemodes the weapon has
            1 - only single
            2 - single + auto
            3- only auto
            4 - single + burst  +auto
            5 - single + burst*/
            var weaponFireModes = [2,1];
            var i;
            for (i = 0; i < weapons.length; i++) {
                eval(weapons[i] + " = new Object()");
                eval("vm.weapons." + weapons[i] + " = eval(weapons[i])");
                eval(weapons[i]).firemode = "single";
                eval(weapons[i]).rangeBar = 0;
                eval(weapons[i]).minRange = 0;
                eval(weapons[i]).maxRangeUnsilenced = weaponRangeUnsilenced[i];
                eval(weapons[i]).maxRangeSilenced = weaponRangeSilenced[i];
                eval(weapons[i]).issilenced = '0';
                eval(weapons[i]).weaponCategory = weaponCategory[i];
                eval(weapons[i]).weaponSilencedType = weaponSilencedType[i];
                eval(weapons[i]).weaponFireModes = weaponFireModes[i];

            }
        };

        vm.init();


        vm.redrawReload = function (rangeBar, weaponname, issilenced, firemode, rangemin, rangemax) {
            vm.weapons[weaponname].rangeBar = 0;
            rangeBar = 0;
            vm.reloadAudio(rangeBar, weaponname, issilenced, firemode);
            vm.redrawRange(rangemin, rangemax,weaponname);
        };

        vm.redrawRange = function (rangemin, rangemax,weaponName) {
            angular.element(document.querySelector("#"+weaponName+"RangeBar"))[0].min = rangemin;
            angular.element(document.querySelector("#"+weaponName+"RangeBar"))[0].max = rangemax;
            angular.element(document.querySelector("#"+weaponName+"AudibleRange"))[0].innerHTML = "Audible range 0-" + rangemax;
        };
        vm.reloadAudio = function (rangeBar, weaponname, issilenced, firemode) {

            angular.element(document.querySelector("#rangeBox" + weaponname))[0].innerHTML = 'Current range is : ' + rangeBar + 'm';
            var audio = angular.element(document.querySelector('#audio' + weaponname))[0];
            var source = angular.element(document.querySelector('#audioSource' + weaponname))[0];
            source.src = 'audio/' + weaponname + '-' + rangeBar + '-' + issilenced + '-' + firemode + '.mp3';

            audio.load();
        };


    });