$(document).ready(function(){


    //texto.addEventListener("click", mostrar, false); 
    
});
//https://developer.mozilla.org/es/docs/Trazado_de_una_tabla_HTML_mediante_JavaScript_y_la_Interface_DOM
//https://codepen.io/Rueb/pen/yVroQm

function genera_tabla() {
    var section=document.getElementsByTagName("section")[0];
    var celda1=section[0];
    var table   = document.createElement("table");
    var tBody = document.createElement("tbody");
   

    for (var i = 0; i < 4; i++) {
      var fila = document.createElement("tr");

      for (var j = 0; j < 4; j++) {
        var celda = document.createElement("td");
        //var textoCelda = document.createTextNode("celda en la fila "+i+", columna "+j);
        var imagenes=document.innerHTML="<img src='../img/img1/fila-"+i+"-col-"+j+".jpg' alt='hello'/>"; 
       
        celda.appendChild(imagenes);
        fila.appendChild(celda);
      }

      tBody.appendChild(fila);
    }

    table.appendChild(tBody);
    section.appendChild(table);
    table.setAttribute("border", "2");
  }