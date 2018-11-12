/*Cerrar Banner*/
$(document).ready(function(){

  document.getElementById("id_cerrar").addEventListener("click", cerrar_banner, false);

  document.getElementById("id_cambiar1").addEventListener("click", cambiarImagenUno, false);
  document.getElementById("id_cambiar2").addEventListener("click", cambiarImagenDos, false);
  document.getElementById("id_cambiar3").addEventListener("click", cambiarImagenTres, false);
  


});

function cerrar_banner(){
    $("#ventanaColgando").remove();

}

function cambiarImagenUno(){

    $("#id_cambiar1").replaceWith("<img src='../imagenes/carrito.png'>");
    //$("#id_cambiar1").attr("src","../imagenes/carrito.jpg");

}
function cambiarImagenDos(){

    $("#id_cambiar2").replaceWith("<img src='../imagenes/carrito.png'>");

   // $("#id_cambiar2").attr("src","../imagenes/carrito.jpg");

}
function cambiarImagenTres(){

    $("#id_cambiar3").replaceWith("<img src='../imagenes/carrito.png'>");

    //$("#id_cambiar3").attr("src","../imagenes/carrito.jpg");

}

/*function cambiarImagen(){

    var imgs=$(".img");
    var obj = $(this);

    imgs.each(function(index) {

        obj.bind("click", function(){
            var id=obj.attr("id");
            obj.attr("src","../imagenes/carrito.jpg");
    
        })

    })
}*/