#pragma strict

var asteroide:Rigidbody2D;
var lancerAsteroide:boolean=true;
static var velociteX:float=-2;// var velocite permet de stocker la valeur de -3 unites
//valeur negative parce que les asteroides sont généres de droite à gauche


function Start(){
}//fin function Start()

function Update(){
	if(lancerAsteroide==true){
		CreerAsteroide();	
	}
}//fin function Update()

function CreerAsteroide(){
	lancerAsteroide=false;
	var yVertical:float=Random.Range(-3,4.5);//Valeur aleatoire de la position ou va se générer un nuveau asteroide.
	transform.position.y=yVertical;
	var newAsteroide:Rigidbody2D=Instantiate(asteroide, transform.position, transform.rotation);//Creation d'un nuveaur asteroide
	var scaleAsteroideX:float=Random.Range(0.4,0.8);//Valeur aleatoire de la grandeur de l'asteriode.
	var scaleAsteroideY=scaleAsteroideX;//Valeur aleatoire de la grandeur de l'asteriode.
	newAsteroide.transform.localScale=Vector2(scaleAsteroideX,scaleAsteroideY);//
	newAsteroide.rigidbody2D.velocity.x=velociteX;
	var rotation_ast:float=Random.Range(-100,100);
	newAsteroide.rigidbody2D.angularVelocity=rotation_ast;
	yield WaitForSeconds(1.5);//Quantité du temps pour la génération des asteroides (seconds)
	lancerAsteroide=true;
}//fin function CreerAsteroide()