#pragma strict
//Script qui controle la creation les tire de laser sur le vaisseau.
public var prefabLaser:Rigidbody2D;// 
public var canon:Transform;
public var velociteX:float=25;// var velocite permet de stocker la valeur de 10 unites


function Start () {

}//fin function Start()

function Update (){
	if(Input.GetButtonDown("Fire1")){//Generation du Laser à partir d'un clic 
		var newLaser:Rigidbody2D; // Creation d'un objet à partir de la classe Rigidbody2D
		newLaser=Instantiate(prefabLaser,canon.transform.position,canon.transform.rotation);//Ici les propriétés du Laser
		newLaser.rigidbody2D.velocity.x=velociteX; // Velocité du Laser au moment qu'il sorte du canon 
		audio.Play();
	}
}//fin function Update()