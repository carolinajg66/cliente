function genera_tabla() {

    var section = document.getElementsByTagName("section")[0];

    var tabla   = document.createElement("table");
    var tblBody = document.createElement("tbody");
    
   
   
    for (var i = 0; i < 4; i++) {
     
      var hilera = document.createElement("tr");
   
      for (var j = 0; j < 4; j++) {
     
        var celda = document.createElement("td");
        //var imagenes=document.createElement("img");
        //var textoCelda = document.createTextNode("celda en la hilera "+i+", columna "+j);
        var miImagen = new Image();
        var link="img/calculadora.png";
   
        miImagen.src=link;

        //imagenes.append(miImagen);
        celda.append(miImagen);
        hilera.appendChild(celda);
      }
   

      tblBody.appendChild(hilera);
    }

    tabla.appendChild(tblBody);

    section.appendChild(tabla);
  
    tabla.setAttribute("border", "2");
  }