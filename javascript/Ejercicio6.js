/*Galeria de imagenes. cambia una imagen en blanco y negro por otra en color. Y, un filtro por botones */

$(document).ready(function(){

var imagenes=document.querySelectorAll("img");

for(var i=0; imagenes.length; i++){

     imagenes[i].addEventListener("mouseover", active, false);
     //imagenes[i].addEvenListener("mouseout", desactive, false);
}
});

function active(e){
  

    if(e.target==img1){
       $("#img1").attr("src","../imagenes/imagenes2/Criaturas1.jpg" );
    }
   if(e.target==img2){
       $("#img2").attr("src","../imagenes/imagenes2/ExpectoP4.jpg" );
    }
    if(e.target==img3){
       $("#img3").attr("src","../imagenes/imagenes2/Maleficos1.jpg" );
    }
    if(e.target==img4){
       $("#img4").attr("src", "../imagenes/imagenes2/Criaturas4.jpg" );
    }
    if(e.target==img5){
        $("#img5").attr("src", "../imagenes/imagenes2/personaje1.jpg" );
    }
    if(e.target==img6){
        $("#img6").attr("src","../imagenes/imagenes2/ExpectoP1.jpg" );
    }
    if(e.target==img7){
        $("#img7").attr("src", "../imagenes/imagenes2/Maleficos5.jpg");
    }
    if(e.target==img8){
        $("#img8").attr("src", "../imagenes/imagenes2/ExpectoP3.jpg" );
    }
    if(e.target==img9){
        $("#img9").attr("src","../imagenes/imagenes2/Criaturas5.jpg" );
    }
    if(e.target==img10){
        $("#img10").attr("src","../imagenes/imagenes2/ExpectoP5.jpg" );
    }
    if(e.target==img11){
        $("#img11").attr("src","../imagenes/imagenes2/Criaturas2.jpg" );
    }
    if(e.target==img12){
        $("#img12").attr("src", "../imagenes/imagenes2/Maleficos2.jpg");
    }
    if(e.target==img13){
        $("#img13").attr("src", "../imagenes/imagenes2/personajes2.jpg");
    }
    if(e.target==img14){
        $("#img14").attr("src","../imagenes/imagenes2/personajes4.jpg" );
    }
    if(e.target==img15){
        $("#img15").attr("src","../imagenes/imagenes2/Criaturas3.jpg" );
    }
    if(e.target==img16){
        $("#img16").attr("src","../imagenes/imagenes2/Maleficos3.jpg" );
    }
    if(e.target==img17){
        $("#img17").attr("src", "../imagenes/imagenes2/ExpectoP2.jpg");
    }
    if(e.target==img18){
        $("#img18").attr("src", "../imagenes/imagenes2/personajes3.jpg");
    }
    if(e.target==img19){
        $("#img19").attr("src","../imagenes/imagenes2/Maleficos4.jpg");
    }
    if(e.target==img20){
        $("#img20").attr("src","../imagenes/imagenes2/personajes5.jpg" );
    }
 
}
/*
function desactive(){
    if(e.target==img1){
        $("#img1").attr("src","img/img1.png" );
    }
   if(e.target==img2){
        $("#img1").attr("src","img/img2.png" );
    }
    if(e.target==img3){
        $("#img1").attr("src","img/img3.png" );
    }
    if(e.target==img4){
        $("#img1").attr("src","img/img4.png" );
    }
 $("#img1").attr("src","img/img2.png" );
 }
*/

