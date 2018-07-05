function showVal(newVal , weaponName,silenced,firemode){
    document.getElementById("valBox"+weaponName+silenced).innerHTML='Current range is : '+newVal+'m';
    var audio = document.getElementById('audio'+weaponName+silenced+firemode);
    var source = document.getElementById('audioSource'+weaponName+silenced+firemode);
    source.src = 'audio/'+weaponName+'-'+newVal+'-'+silenced+'-'+firemode+'.mp3';

    audio.load(); //call this to just preload the audio without playing
    /*audio.play(); //call this to play the song right away*/
}

