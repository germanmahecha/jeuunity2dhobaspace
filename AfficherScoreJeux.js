#pragma strict
import UnityEngine.UI; // Importer les classes UI 
var composantTexteScore:Text; // Variable type texte
static var score:int; //variable entier pour stocker le score

function Awake () {
	composantTexteScore = GetComponent(Text); //Trouver le composant pour écrire le score
	score=0; //Valeur initial du score
}//fin function Awake()

function Start () {

}//fin function Start()

function Update () {
	composantTexteScore.text="Score: "+score.ToString(); //Convertir la variable score a chaine de carateres 
	//-------------------------------
	
	if(score==100)//Messages de encouragement
	{
		AfficherMessage.message="Bravo!!!";
		AfficherMessage.messageVisible=true;
	}	
	if(score==200)//Agmentation de la vitesse des asteroides quand le joueur arrive a 200 points
	{
		CreateurAsteroides.velociteX=-4;
		AfficherMessage.message="Plus viteeeee!!!";
		AfficherMessage.messageVisible=true;
	}
	if(score==300)//Agmentation de la vitesse des asteroides quand le joueur arrive a 300 points
	{
		CreateurAsteroides.velociteX=-6;
		AfficherMessage.message="Beaucoup plus viteeeee!!!";
		AfficherMessage.messageVisible=true;
	}
	if(score==400)//Agmentation de la vitesse des asteroides quand le joueur arrive a 400 points
	{
		CreateurAsteroides.velociteX=-8;
		AfficherMessage.message="Encore plus viteeeee!!!";
		AfficherMessage.messageVisible=true;
	}
	if(score==500)//Agmentation de la vitesse des asteroides quand le joueur arrive a 500 points
	{
		CreateurAsteroides.velociteX=-10;
		AfficherMessage.message="Super viteeeee!!!";
		AfficherMessage.messageVisible=true;
	}
	//-------------------------------
}//fin function Update()