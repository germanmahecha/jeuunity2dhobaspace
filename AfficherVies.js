#pragma strict
import UnityEngine.UI; // Importer la classe UI
import UnityEngine.EventSystems;//Importer la classe EventSystems
var composantTexteVies:Text; // Variable type texte
static var vies:int; //variable entier pour stocker les vies
var scene:int;


function Awake () {
	composantTexteVies = GetComponent(Text); //Trouver le composant pour écrire les vies
	vies=5; //Valeur initial des vies
}//fin function Awake()

function Start () {

}//fin function Start()

function Update () {
	//composantTexteVies.text="Vies: "+vies.ToString(); //Convertir la variable vies a chaine de carateres
	if(vies==0)//Quand le joueur arrive a ) vies la scene change (Game Over)
	{
		Play(scene);
	}
}//fin function Update()

function Play(scene:int) //Function qui change la scene
{
     Application.LoadLevel(scene);
}
