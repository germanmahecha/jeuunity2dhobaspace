#pragma strict
var audioSource:AudioSource; //variable type audio

function OnOff () {
	if(audioSource.enabled==false)
	{
		audioSource.enabled=true;//Active la musique sur la scene
	}else{
		audioSource.enabled=false;//Arret sur la musique de la scene
	}
}//Fin function OnOff()

