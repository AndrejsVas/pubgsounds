document.getElementById("valBox").innerHTML=500;

function showVal(newVal , weaponName){
    document.getElementById("valBox").innerHTML=newVal+'m';

    var audio = document.getElementById('audio');
    var source = document.getElementById('audioSource');
    source.src = 'audio/'+weaponName+'-'+newVal+'.mp3';

    audio.load(); //call this to just preload the audio without playing
    /*audio.play(); //call this to play the song right away*/
}