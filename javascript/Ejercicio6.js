/*Galeria de imagenes. cambia una imagen en blanco y negro por otra en color. Y, un filtro por botones */

$(document).ready(function(){

var imagenes=document.querySelectorAll("img");

var criaturas=document.getElementById("id_criaturas").addEventListener("click", soloCriaturas, false);
var patronus=document.getElementById("id_patronum").addEventListener("click", soloPatromum, false);
var maleficos=document.getElementById("id_maleficos").addEventListener("click", soloMaleficos, false);
var personajes=document.getElementById("id_personajes").addEventListener("click", soloPersonajes, false);

var mostrarTodo=document.getElementById("id_mostrarTodo").addEventListener("click", solomostrarTodo, false);



for(var i=0; imagenes.length; i++){

     imagenes[i].addEventListener("mouseover", active, false);
     imagenes[i].addEventListener("mouseout", desactive, false);
     
}
});

function solomostrarTodo(){

    mostrarCriautras();
    mostrarmaleficos();
    mostrarpatronus();
    mostrarpersonajes();


}

function soloCriaturas(){

    ocultarmaleficos();
    ocultarpatronus();
    ocultarpersonajes();
    mostrarCriautras();
}

function soloPatromum(){

    ocultarCriautras();
    ocultarmaleficos();
    ocultarpersonajes();
    mostrarpatronus();
}

function soloMaleficos(){

    ocultarCriautras();
    ocultarpatronus();
    ocultarpersonajes();
    mostrarmaleficos();
}

function soloPersonajes(){

    ocultarCriautras();
    ocultarmaleficos();
    ocultarpatronus();
    mostrarpersonajes();

}

function ocultarCriautras(){

    $("#img1").hide();
    $("#img11").hide();
    $("#img15").hide();
    $("#img4").hide();
    $("#img9").hide();
   
}

function ocultarpatronus(){

    $("#img6").hide();
    $("#img17").hide();
    $("#img8").hide();
    $("#img2").hide();
    $("#img10").hide();
   
}

function ocultarmaleficos(){

    $("#img3").hide();
    $("#img12").hide();
    $("#img16").hide();
    $("#img19").hide();
    $("#img7").hide();

}
function ocultarpersonajes(){

    $("#img5").hide();
    $("#img13").hide();
    $("#img18").hide();
    $("#img14").hide();
    $("#img20").hide();
}

function mostrarCriautras(){

    $("#img1").show();
    $("#img11").show();
    $("#img15").show();
    $("#img4").show();
    $("#img9").show();
   
}

function mostrarpatronus(){

    $("#img6").show();
    $("#img17").show();
    $("#img8").show();
    $("#img2").show();
    $("#img10").show();
   
}

function mostrarmaleficos(){

    $("#img3").show();
    $("#img12").show();
    $("#img16").show();
    $("#img19").show();
    $("#img7").show();

}
function mostrarpersonajes(){

    $("#img5").show();
    $("#img13").show();
    $("#img18").show();
    $("#img14").show();
    $("#img20").show();
}


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

function desactive(e){

    if(e.target==img1){
        $("#img1").attr("src","../imagenes/imagenes3/Criaturas1-ConvertImage.jpg" );
     }
    if(e.target==img2){
        $("#img2").attr("src","../imagenes/imagenes3/ExpectoP4-ConvertImage.jpg" );
     }
     if(e.target==img3){
        $("#img3").attr("src","../imagenes/imagenes3/Maleficos1-ConvertImage.jpg" );
     }
     if(e.target==img4){
        $("#img4").attr("src", "../imagenes/imagenes3/criaturas4-ConvertImage.jpg" );
     }
     if(e.target==img5){
         $("#img5").attr("src", "../imagenes/imagenes3/personaje1-ConvertImage.jpg" );
     }
     if(e.target==img6){
         $("#img6").attr("src","../imagenes/imagenes3/ExpectoP1-ConvertImage.jpg" );
     }
     if(e.target==img7){
         $("#img7").attr("src","../imagenes/imagenes3/Maleficos5-ConvertImage.jpg");
     }
     if(e.target==img8){
         $("#img8").attr("src", "../imagenes/imagenes3/ExpectoP3-ConvertImage.jpg" );
     }
     if(e.target==img9){
         $("#img9").attr("src","../imagenes/imagenes3/criaturas5-ConvertImage .jpg" );
     }
     if(e.target==img10){
         $("#img10").attr("src","../imagenes/imagenes3/ExpectoP5-ConvertImage.jpg" );
     }
     if(e.target==img11){
         $("#img11").attr("src","../imagenes/imagenes3/criaturas2-ConvertImage.jpg"  );
     }
     if(e.target==img12){
         $("#img12").attr("src", "../imagenes/imagenes3/Maleficos2-ConvertImage.jpg");
     }
     if(e.target==img13){
         $("#img13").attr("src", "../imagenes/imagenes3/personajes2-ConvertImage.jpg");
     }
     if(e.target==img14){
         $("#img14").attr("src","../imagenes/imagenes3/personajes4-ConvertImage.jpg" );
     }
     if(e.target==img15){
         $("#img15").attr("src","../imagenes/imagenes3/criaturas3-ConvertImage.jpg" );
     }
     if(e.target==img16){
         $("#img16").attr("src","../imagenes/imagenes3/Maleficos3-ConvertImage.jpg" );
     }
     if(e.target==img17){
         $("#img17").attr("src", "../imagenes/imagenes3/ExpectoP2-ConvertImage.jpg" );
     }
     if(e.target==img18){
         $("#img18").attr("src", "../imagenes/imagenes3/personajes3-ConvertImage.jpg");
     }
     if(e.target==img19){
         $("#img19").attr("src","../imagenes/imagenes3/Maleficos4-ConvertImage.jpg");
     }
     if(e.target==img20){
         $("#img20").attr("src","../imagenes/imagenes3/personajes5-ConvertImage.jpg" );
     }

}
