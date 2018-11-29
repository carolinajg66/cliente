$(document).ready(function(){

    var texto=document.getElementById("contador");
    
    var contador=0;

    texto.addEventListener("click", mostrar, false); 
    
    });

    function mostrar(){

        texto.textContent=texto.conmtador++;
        texto=pasetInt(texto)+contador++;
        
 //textContent
    }