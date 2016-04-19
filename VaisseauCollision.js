#pragma strict
//Script qui controle destruction des asteroides apres une collision
var collisionRad:GameObject;

function Start () {

}//fin function Start()

function Update () {


}//fin function Update()

function OnTriggerEnter2D(autreObjet:Collider2D) 
{
	if(autreObjet.gameObject.tag=="Radioactive")
	{
		Instantiate(collisionRad,autreObjet.transform.position,autreObjet.transform.rotation);
	    Destroy(autreObjet.gameObject); // Destruction Asteroide Radioactive
		//Destroy(gameObject); //Destruction Vaisseau
		
		AfficherVies.vies-=1;
	}
}
