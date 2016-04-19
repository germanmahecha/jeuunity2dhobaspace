#pragma strict

var asteroideRad:Rigidbody2D;
var lancerAsteroideRad:boolean=true;
var velociteX:float=-5;// var velocite permet de stocker la valeur de -3 unites
//valeur negative parce que les asteroides Radioactives sont généres de droite à gauche


function Start(){
}//fin function Start()

function Update(){
	if(lancerAsteroideRad==true){
		CreerAsteroideRad();	
	}
}//fin function Update()

function CreerAsteroideRad(){
	lancerAsteroideRad=false;
	var yVertical:float=Random.Range(-3,4.5);//Valeur aleatoire de la position ou va se générer un nuveau asteroide Radioactive.
	transform.position.y=yVertical;
	var newAsteroideRad:Rigidbody2D=Instantiate(asteroideRad, transform.position, transform.rotation);//Creation d'un nuveaur asteroide Radioactive
	var scaleAsteroideRadX:float=Random.Range(0.5,1);//Valeur aleatoire de la grandeur de l'asteriode Radioactive.
	var scaleAsteroideRadY=scaleAsteroideRadX;//Valeur aleatoire de la grandeur de l'asteriode Radioactive.
	newAsteroideRad.transform.localScale=Vector2(scaleAsteroideRadX,scaleAsteroideRadY);//
	newAsteroideRad.rigidbody2D.velocity.x=velociteX;
	var rotation_astRad:float=Random.Range(-100,100);
	newAsteroideRad.rigidbody2D.angularVelocity=rotation_astRad;
	yield WaitForSeconds(3);//Quantité du temps pour la génération des asteroides Radioactives (seconds)
	lancerAsteroideRad=true;
}//fin function CreerAsteroideRad()