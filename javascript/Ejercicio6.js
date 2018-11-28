/*Galeria de imagenes. cambia una imagen en blanco y negro por otra en color. Y, un filtro por botones */

$(document).ready(function(){

document.querySelectorAll("img");

for(var i=0; i<imagenes.lengt; i++){
    imagenes[i]=document.addEvenListener("mouseover", active, false);
     imagenes[i]=document.addEvenListener("mouseout", desactive, false);

}

function active(e){

    if(e.target==img1){
       $("#img1").attr("src","img/img1.png" );
    }
   if(e.target==img2){
       $("#img2").attr("src","img/img2.png" );
    }
    if(e.target==img3){
       $("#img3").attr("src","img/img3.png" );
    }
    if(e.target==img4){
       $("#img4").attr("src","img/img4.png" );
    }
    if(e.target==img4){
        $("#img5").attr("src","img/img4.png" );
    }
    if(e.target==img4){
        $("#img6").attr("src","img/img4.png" );
    }
    if(e.target==img4){
        $("#img7").attr("src","img/img4.png" );
    }
    if(e.target==img4){
        $("#img8").attr("src","img/img4.png" );
    }
    if(e.target==img4){
        $("#img9").attr("src","img/img4.png" );
    }
    if(e.target==img4){
        $("#img10").attr("src","img/img4.png" );
    }
    if(e.target==img4){
        $("#img11").attr("src","img/img4.png" );
    }
    if(e.target==img4){
        $("#img12").attr("src","img/img4.png" );
    }
    if(e.target==img4){
        $("#img13").attr("src","img/img4.png" );
    }
    if(e.target==img4){
        $("#img14").attr("src","img/img4.png" );
    }
    if(e.target==img4){
        $("#img15").attr("src","img/img4.png" );
    }
    if(e.target==img4){
        $("#img16").attr("src","img/img4.png" );
    }
    if(e.target==img4){
        $("#img17").attr("src","img/img4.png" );
    }
    if(e.target==img4){
        $("#img18").attr("src","img/img4.png" );
    }
    if(e.target==img4){
        $("#img19").attr("src","img/img4.png" );
    }
    if(e.target==img4){
        $("#img20").attr("src","img/img4.png" );
    }
 
}

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

});
