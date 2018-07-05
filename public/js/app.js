
angular.module('app', [])
    .controller('maincontroller' , function(){
        var vm = this;
        vm.content = "true";
        vm.isSilenced = function(){
            if(vm.content == "true") {
                console.log("true");
                return true;
            }
            else{
                console.log("false");
                return false;
            }
        }
    })