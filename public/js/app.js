
angular.module('app', [])
    .controller('maincontroller' , function($scope){
        var vm = this;
        vm.content = "true";

        var p1911 = new Object();
        vm.p1911=p1911;
        vm.p1911.firemode = "single";
        vm.p1911.range= 0;
        vm.p1911.issilenced = '1';
		
		var R45 = new Object();
        vm.R45=R45;
        vm.R45.firemode = "single";
        vm.R45.range= 0;
        vm.R45.issilenced = '1';



        vm.reloadaudio = function(range,weaponname , issilenced , firemode){

            angular.element( document.querySelector("#valBox"+weaponname))[0].innerHTML='Current range is : '+range+'m';
            var audio =angular.element( document.querySelector('#audio'+weaponname))[0];
            var source = angular.element( document.querySelector('#audioSource'+weaponname))[0];
            source.src = 'audio/'+weaponname+'-'+range+'-'+issilenced+'-'+firemode+'.mp3';

            audio.load();
        }
    });