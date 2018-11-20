$(document).ready(function(){


    var boton=document.querySelectorAll("button");
    

  
    for (var i=0; boton.length ; i++){ 
   
        boton[i].addEventListener("click", aumentar, false);
        boton[i].addEventListener("click", disminuir, false);
    }

        function aumentar(e){
            var sitio; 
          
            if(e.target==id_aumento1){
                sitio=".textoUno";

            }else if(e.target==id_aumento2){
                sitio=".textoDos";
                
            }else if(e.target==id_aumento3){
                sitio=".textoTres";
            }
            var porDefecto = $(sitio).css("font-size");

            porDefecto=parseInt(porDefecto);

            $(sitio).css("font-size", porDefecto*1.1);
        }


        function disminuir(e){
            var sitioD; 
          
            if(e.target==id_disminuir1){
                sitioD=".textoUno";

            }else if(e.target==id_disminuir2){
                sitioD=".textoDos";
                
            }else if(e.target==id_disminuir3){
                sitioD=".textoTres";
            }
            var porDefecto = $(sitioD).css("font-size");

            porDefecto=parseInt(porDefecto);

            $(sitioD).css("font-size", porDefecto/1.1);
        }

       
  });