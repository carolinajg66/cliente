/*PARTE DOS EJERCICIO CARRITO*/
$(function(){

    var items=document.getElementsByClassName("item");
    /*items.addEventListener("click", articulosDisponibles, false);*/

    for(var i=0; i<=items.length; i++){

        //alert(items.length);
        $(".item").on("click", articulosDisponibles);

    }
   
    //var stock=document.getElementsByClassName("stock");

  
    //alert(items.length);

});

function articulosDisponibles(e){


    $(this).css("background-color", "blue");


   /* var hola=$(stock).substring(7, 8);

    alert(hola);*/

   /* if($(stock)){

    }*/

}

    