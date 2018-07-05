
angular.module('app', [])
    .controller('maincontroller' , function($scope){
        var vm = this;
        vm.content = "true";

        var p1911 = new Object();
        vm.p1911=p1911;
        vm.p1911.firemode = "single";
        vm.p1911.range= 0;

        vm.isSilenced = function(){
            if(vm.content == "true") {
                console.log("true");
                return true;
            }
            else{
                console.log("false");
                return false;
            }
        };


        vm.reloadauidio = function(range,weaponname , issilenced , firemode){

            angular.element( document.querySelector("#valBox"+weaponname+issilenced))[0].innerHTML='Current range is : '+range+'m';
            var audio =angular.element( document.querySelector('#audio'+weaponname+issilenced+firemode))[0];
            var source = angular.element( document.querySelector('#audioSource'+weaponname+issilenced+firemode))[0];
            source.src = 'audio/'+weaponname+'-'+range+'-'+issilenced+'-'+firemode+'.mp3';

            audio.load(); //call this to just preload the audio without playing

            /*'audio/'+weaponName+'-'+newVal+'-'+silenced+'-'+firemode+'.mp3'*/
        }
    })