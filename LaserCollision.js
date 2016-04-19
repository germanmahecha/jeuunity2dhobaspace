#pragma strict
//Script qui controle destruction des asteroides apres une collision
var CollisionAsteroide:GameObject;
var CollisionAsteroideRad:GameObject;
function Start () {

}//fin function Start()

function Update () {

}//fin function Update()

function OnTriggerEnter2D(autreObjet:Collider2D) 
{
	if(autreObjet.gameObject.tag=="Asteroide")//S'il y a une collition entre le laser et l'asteroide 
	{
		Instantiate(CollisionAsteroide,autreObjet.transform.position,autreObjet.transform.rotation);//creation d'une explosion
	    Destroy(autreObjet.gameObject);//destruction du laser
		Destroy(gameObject);//destruction de l'asteroide
		
		AfficherScoreJeux.score+=10;//agmentatio du score en 10 points
		
	}
	if(autreObjet.gameObject.tag=="Radioactive")
	{
		Instantiate(CollisionAsteroideRad,autreObjet.transform.position,autreObjet.transform.rotation);//creation d'une explosion
	    Destroy(autreObjet.gameObject);//destruction du laser
		Destroy(gameObject);//destruction de l'asteroide radioactive
		
		AfficherVies.vies-=1;//Rester une vie
		
		
	}
}
