$(document).ready(function(){


    var boton=document.querySelectorAll("button");
    

  
    for (var i=0; i<boton.lengh; i++){
        
        boton[i].addEventListener("click", aumentar, false);
        //boton[i].addEventListener("click", disminuir, false);
    }

        function aumentar(e){
            //var sitio; 
            alert(e.target.id);
          /*
            if(e.target==aumento1){
                sitio="#textoUno";

            }else if(e.target==aumento2){
                sitio="#textoDos";
                
            }else if(e.target==aumento3){
                sitio="#textoTres";
            }
            var porDefecto = $(sitio).css("font-size");

            porDefecto=parseInt(porDefecto);

            $(sitio).css("font-size", porDefecto*1.1);*/
        }

/*
        function disminuir(e){
            var lugar; 
          
            if(e.target==disminuir1){
                lugar="#textoUno";

            }else if(e.target==disminuir2){
                lugar="#textoDos";
                
            }else if(e.target==disminuir3){
                lugar="#textoTres";
            }
            var porDefecto = $(lugar).css("font-size");

            porDefecto=parseInt(porDefecto);

            $(sitio).css("font-size", porDefecto*1.1);
        }
*/
       
  });