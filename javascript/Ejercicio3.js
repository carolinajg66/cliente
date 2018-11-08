/*Cerrar Banner*/
$(document).ready(function(){

  document.getElementById("id_cerrar").addEventListener("click", cerrar_banner, false);

  document.getElementById("id_cambiar1").addEventListener("click", cambiarImagen, false);
  document.getElementById("id_cambiar2").addEventListener("click", cambiarImagen, false);
  document.getElementById("id_cambiar3").addEventListener("click", cambiarImagen, false);
  document.getElementById("id_cambiar4").addEventListener("click", cambiarImagen, false);


});

function cerrar_banner(){
    $("#ventanaColgando").remove();

}

function cambiarImagen(){

    var imgs=$(".img");
    var obj = $(this);

    
    imgs.each(function(index) {

        obj.bind("click", function(){
            var id=obj.attr("id");
            obj.attr("src","../imagenes/carrito.jpg");
    
        })

    })
    
    

}