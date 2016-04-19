#pragma strict
//Script qui controle le deplaçemet du vaisseau dans le jeux.

var velocite:float=10;// var velocite permet de stocker la valeur de 10 unites

function Start() {

}//fin function Start()

function Update() 
{
	var movX:float=Input.GetAxis("Horizontal");//var movX permet de stocker la position du Vaisseau sur l'axis horizontal
	rigidbody2D.velocity.x=movX*velocite;//Permet le deplaçement sur l'axis horizontal
	var movY:float=Input.GetAxis("Vertical");//var movY permet de stocker la position du Vaisseau sur l'axis vertical
	rigidbody2D.velocity.y=movY*velocite;//Permet le deplaçement sur l'axis vertical
	
	//Le deplaçement du vaisseau sur l'Axis X va être limite pour les valeurs (-6.5 à gauche et 0 à droite)
	if(transform.position.x<=-6.5){
		transform.position.x=-6.5;
	}
	if(transform.position.x>=0){
		transform.position.x=0;
	}
	//Le deplaçement du vaisseau sur l'Axis Y va être limite pour les valeurs (-4.3 en bas et 4.9 en haut)
	if(transform.position.y<=-3){
		transform.position.y=-3;
	}
	if(transform.position.y>=4.9){
		transform.position.y=4.9;
	}
} //fin function Update()