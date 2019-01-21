$(document).ready(function(){

  //alert("hola");

  //$("#genera_tabla").addEventListener("click", genera_tabla, false); 

});

function genera_tabla() {
    var section=document.getElementsByTagName("section")[0];
    var table  = document.createElement("table");
    var div = document.createElement("div");
    //var imagenes=[00,01,02,03,10,11,12,13,20,21,22,23,30,31,32,33]; 
    var imagenes; 
   

    for (var i = 0; i < 4; i++) {
      var fila = document.createElement("tr");

      for (var j = 0; j < 4; j++) {
        var celda = document.createElement("td");
        //var textoCelda = document.createTextNode("celda en la fila "+i+", columna "+j);
        var imag=document.createElement("img");
        var w=i+j; 
        imagenes[w].setAttribute("src","../img/img1/fila-"+i+"-col-"+j+".jpg");
        
        //var src='../img/img1/fila-"+i+"-col-"+j+".jpg';
        //var imagenes;
        //imagenes=src;
        //var imagenes="<img src='../img/img1/fila-"+i+"-col-"+j+".jpg' alt='hello'/>"; 
       
        imag.appendChild(imagenes);
        celda.appendChild(imag);
        fila.appendChild(celda);
      }

      div.appendChild(fila);
    }

    table.appendChild(div);
    section.appendChild(table);
    table.setAttribute("border", "2");
  }