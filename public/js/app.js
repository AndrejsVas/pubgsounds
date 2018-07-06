
angular.module('app', [])
    .controller('maincontroller' , function(){

		var vm = this;
        vm.content = "true";
        vm.weapons={};


		vm.init = function() {
			var weapons = ["P1911", "R45"] /*"R1895", "P92", "P18C", "SAWED_OFF", "S12K", "S1897", "S686", "MICRO_UZI", "KRISS_VECTOR", "UMP9", "TOMMY_GUN", "M16A4", "M416", "QBZ95", "SCAR_L", "AKM", "VSS", "MINI14", "SKS", "SLR", "WIN94", "KARABINER_98_KURZ", "M24", "DP_28"];																				*/
            var weaponRangeUnsilenced = ["300","100"];
            var weaponRangeSilenced = ["100" , "100"];
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
            }
		};

		vm.init();


        vm.redrawReload = function(rangeBar, weaponname , issilenced , firemode, rangemin, rangemax){
            vm.reloadAudio(rangeBar,weaponname,issilenced,firemode);
            vm.redrawRange(rangemin,rangemax);
        };

        vm.redrawRange = function(rangemin, rangemax){
            angular.element( document.querySelector("#weapon1"))[0].min=rangemin;
            angular.element( document.querySelector("#weapon1"))[0].max=rangemax;
            angular.element( document.querySelector("#audibleRange"))[0].innerHTML="Audible range 0-"+rangemax;
        };
        vm.reloadAudio = function(rangeBar, weaponname , issilenced , firemode){

            angular.element( document.querySelector("#valBox"+weaponname))[0].innerHTML='Current range is : '+rangeBar+'m';
            var audio =angular.element( document.querySelector('#audio'+weaponname))[0];
            var source = angular.element( document.querySelector('#audioSource'+weaponname))[0];
            source.src = 'audio/'+weaponname+'-'+rangeBar+'-'+issilenced+'-'+firemode+'.mp3';

            audio.load();
        };


    });