
/*var section=document.getElementById("section");



section.onmousemove*/

// Detectar si el navegador es Internet Explorer
/*var ie = navigator.userAgent.toLowerCase().indexOf('msie')!=-1;

if(ie) {
	coordenadaX = event.clientX +  document.body.scrollLeft;
     coordenadaY = event.clientY + document.body.scrollTop;
}else {
coordenadaX = event.pageX;
coordenadaY = event.pageY;
}
alert("Has pulsado el ratón en la posición: " + coordenadaX + ", " +
coordenadaY + " respecto de la página web");
*/

var container=document.getElementById("container");

var coorde=document.getElementById("coordenadas");

var coordeScreen=document.getElementById("coordenadasScreen");


var ie = navigator.userAgent.toLowerCase().indexOf('msie')!=-1;

if(ie){

    container.addEventListener("click",coordenadasExplorer,false);

}else{
    container.addEventListener("click",coordenadas,false);
}

function coordenadas(event){

    var x=event.pageX;
    var y=event.pageY;
    var xscreen=event.screenX;
    var yscreen=event.screenY;
    var coords=" Coordinadas X: "+x+" Coordinadas Y: "+y;
    var coordsscreen=" Coordinadas X: "+xscreen+" Coordinadas Y: "+yscreen;
    coorde.innerHTML=coords;
    coordeScreen.innerHTML=coordsscreen;
}

function coordenadasExplorer(event){
    var x=event.clientX + document.body.scrollLeft;
    var y=event.clientY +document.body.scrollTop;

}