#pragma strict

var comete:Rigidbody2D;
var lancerComete:boolean=true;
var velociteX:float=-2;// var velocite permet de stocker la valeur de -2 unites
//valeur negative parce que les asteroides sont généres de droite à gauche

var velociteY:float=-2;// var velocite permet de stocker la valeur de -2 unites
//valeur negative parce que les comete sont généres de haut en bas

function Start(){
}//fin function Start()

function Update(){
	if(lancerComete==true){
		CreerComete();	
	}
}//fin function Update()

function CreerComete(){
	lancerComete=false;
	var xVertical:float=Random.Range(-10,25);//Valeur aleatoire de la position ou va se générer un nuveau comete.
	transform.position.x=xVertical;
	var newComete:Rigidbody2D=Instantiate(comete, transform.position, transform.rotation);//Creation d'un nuveaur comete
	var scaleCometeX:float=Random.Range(0.2,0.9);//Valeur aleatoire de la grandeur du comete.
	var scaleCometeY=scaleCometeX;//Valeur aleatoire de la grandeur d'un comete.
	newComete.transform.localScale=Vector2(scaleCometeX,scaleCometeY);//
	newComete.rigidbody2D.velocity.x=velociteX;
	newComete.rigidbody2D.velocity.y=velociteY;
	yield WaitForSeconds(1);//Quantité du temps pour la génération des cometes (seconds)
	lancerComete=true;
}//fin function CreerComete()