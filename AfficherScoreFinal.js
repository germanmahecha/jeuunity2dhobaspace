#pragma strict
import UnityEngine.UI; // Importer les classes UI 
var composantTexteScore:Text; // Variable type texte
var composantTexteMessageFin:Text;// Variable type texte
//variable entier pour stocker le score final

function Awake () {
	composantTexteScore = GetComponent(Text); //Trouver le composant pour écrire le score
	 //Valeur initial du score
}//fin function Awake()

function Start () {

}//fin function Start()

function Update () {
	composantTexteScore.text="SCORE FINAL: "+AfficherScoreJeux.score.ToString(); //Convertir la variable score a chaine de carateres 
	//-------------------------------
	//Messages de encouragement
	if(AfficherScoreJeux.score<=100)
	{
		composantTexteMessageFin.text="La prochaine va etre mieux!!!";		
	}
	if(AfficherScoreJeux.score>100&&AfficherScoreJeux.score<500)
	{
		composantTexteMessageFin.text="Bon travail!!!";		
	}
	if(AfficherScoreJeux.score>500)
	{
		composantTexteMessageFin.text="Excellent!!!";		
	}
}//fin function Update()