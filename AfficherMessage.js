#pragma strict
import UnityEngine.UI; // Importer les classes UI 
static var message:String; //variable String pour stocker les messages
var compter:float=1;
var composantTexte:Text; // Variable type texte
static var messageVisible:boolean=false; // Por rendre visible le message

function Awake () {
	composantTexte = GetComponent(Text); //Trouver le composant pour écrire le message
	message=""; //Message vide pour effacer les nouveaux messages.
}//fin function Awake()

function Start () {

}//fin function Start()

function Update () {
	composantTexte.text=message;
	
	//-------------------------------
	//C'est partie efface le message après que le joueur tire sur le prochain asteroide
	if(messageVisible==true)
	{
		compter-=Time.deltaTime;
		if(compter<=100)
			message="";
			compter=1;
			messageVisible=false;//rendre invisible le message.
	}//-------------------------------
}//fin function Update()