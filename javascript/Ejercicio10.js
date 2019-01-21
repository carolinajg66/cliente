/*PARTE DOS EJERCICIO CARRITO*/
$(function(){
    //menu desplegable con Jquery  

    $( ).
     
    http://jsfiddle.net/ZyUYN/
    //.val para coger infomacion de los input
    //En el boton ponemos type=submmit 
    //https://developer.mozilla.org/es/docs/Trazado_de_una_tabla_HTML_mediante_JavaScript_y_la_Interface_DOM
    //https://codepen.io/Rueb/pen/yVroQm

    $("#form_DATOS").submit(function(){

        var miNombre=$("#nombre").val();
        alert("mi nombre es"+miNombre);

        $(":text").each (function(){//parac cada campo de tipo text
            alert($(this).val());

        });

    });

    $("#form_DATOS").submit(function(){

       if( $("#nombre").val==""){
           alert("rellena el campo del nombre ");
           $("#nombre").focus();
           return false; 
       }

    

    });
    $("#edad").blur(function(){

           var miEdad=$(this).val(); 
           if(isNam(miEdad)){
               alert("Escribe tu edad en numeros");
               $(this).focus();
               $(this).val("");
           }
    });

    //pinetools 

});

