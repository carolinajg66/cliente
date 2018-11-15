$(document).ready(function(){


    var boton=document.querySelectorAll("button");

  
    for (var i=0; boton.lengh; i++){
        
        boton[i].addEventListener("click", aumentar, false);
        boton[i].addEventListener("click", disminuir, false);


        function aumentar(e){
            var sitio; 
          
            if(e.target==aumento1){
                sitio="#textoUno";

            }else if(e.target==aumento2){
                sitio="#textoDos";
                
            }else if(e.target==aumento3){
                sitio="#textoTres";
            }
        }

        $(sitio).css

    }



  });