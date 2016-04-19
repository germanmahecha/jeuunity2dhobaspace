#pragma strict
import UnityEngine.UI;//Import la classe UI
var composantImage:UI.Image; //variable type image


function Awake () {
	composantImage = GetComponent(Image);
	composantImage.fillAmount=1;
}

function Update () {//Permet de rester vies dans la barre de vies
	var nombreVies:float=AfficherVies.vies;
	composantImage.fillAmount=nombreVies/5;
}