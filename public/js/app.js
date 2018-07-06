
angular.module('app', [])
    .controller('maincontroller' , function($scope){

		var vm = this;
        vm.content = "true";

		var weapons = ['p1911', 'R45'];

		$scope.init = function() {
			var weapons = ["p1911", "R45"];
			var i;
			for (i = 0; i < weapons.length; i++) {
				eval(weapons[i] + " = new Object()");
				eval("vm." + weapons[i] + " = eval(weapons[i])");
				eval(weapons[i]).firemode = "single";
				eval(weapons[i]).range = 0;
				eval(weapons[i]).issilenced = '0';
			}
			console.log(eval(weapons[0]).issilenced);
		}

		$scope.init();


        vm.redrawreload = function(range,weaponname , issilenced , firemode,rangemin,rangemax){
            vm.reloadaudio(range,weaponname,issilenced,firemode);
            vm.redrawrange(rangemin,rangemax);
        };

        vm.redrawrange = function(rangemin,rangemax){
            angular.element( document.querySelector("#weapon1"))[0].min=rangemin;
            angular.element( document.querySelector("#weapon1"))[0].max=rangemax;
        };
        vm.reloadaudio = function(range,weaponname , issilenced , firemode){

            angular.element( document.querySelector("#valBox"+weaponname))[0].innerHTML='Current range is : '+range+'m';
            var audio =angular.element( document.querySelector('#audio'+weaponname))[0];
            var source = angular.element( document.querySelector('#audioSource'+weaponname))[0];
            source.src = 'audio/'+weaponname+'-'+range+'-'+issilenced+'-'+firemode+'.mp3';

            audio.load();
        };


    });