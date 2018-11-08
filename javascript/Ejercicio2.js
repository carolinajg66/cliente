/*POner dos campos y que si no se rellenar que aparezca un mensaje despues del campo(input)*/
$(document).ready(function(){
    var nombre=document.getElementById("nombre");

    var apellido=document.getElementById("apellido");

    var botonAceptar=document.getElementById("aceptar");
   

    botonAceptar.onclick=function(e){

        if(nombre.value==""){
            nombre.after("Tienes que rellenarlo");
        }
        if(apellido.value==""){
            apellido.after("Tienes que rellenarlo");
        }
    
    };

    /*$("#aceptar").click(function(){
        alert(nombre);

        if(nombrea==""){
            nombre.after("Tienes que rellenar el nombre");
           
        }
        if(apellidosa==""){
            apellido.after("Tienes que escribir el apellido");
0
        }

    })*/
    

    /*.html (inserta texto cambiandolo)
    
    .text(inserta texto)
    
    .append (inserta texto detras)
    
    .prepend (inserta texto delante)
    
    .before(inserta (lo que sea/elemento ) antes del elemento que hayamos seleccionado)
    
    .after(inserta(lo que sea/elemento) despues del elemento que hayamos seleccionado)
    
    */
    
    });
