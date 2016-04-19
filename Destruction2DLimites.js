#pragma strict
//Script qui controle la destruction des objets quand ils sortent de la scene
function Start () {

}//fin function Start()

function Update () {
	
}//fin function Update()

function OnTriggerExit2D (autreObjet:Collider2D) {
	Destroy(autreObjet.gameObject);
	
}// fin function OnTriggerExit2D()