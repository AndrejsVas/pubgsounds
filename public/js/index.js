function showVal(newVal , weaponName,silenced){
    document.getElementById("valBox"+weaponName+silenced).innerHTML='Current range is : '+newVal+'m';
    var audio = document.getElementById('audio'+weaponName+silenced);
    var source = document.getElementById('audioSource'+weaponName+silenced);
    source.src = 'audio/'+weaponName+'-'+newVal+'-'+silenced+'.mp3';

    audio.load(); //call this to just preload the audio without playing
    /*audio.play(); //call this to play the song right away*/
}