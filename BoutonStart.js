#pragma strict
import UnityEngine.UI;//Import la classe UI
import UnityEngine.EventSystems;//Import la classe EventSystems
var scene:int; //Variable qui nous permet de stoker le numero de la scene

function Play(scene:int)//Pour aller a la scene du jeu
{
     Application.LoadLevel(scene);
}//Fin function Play()
