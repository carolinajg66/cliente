function genera_tabla() {

  var section = document.getElementsByTagName("section")[0];

  var tabla = document.createElement("table");
  var tblBody = document.createElement("tbody");
  var x = 0;
  for (var i = 0; i < 4; i++) {

    var hilera = document.createElement("tr");

    for (var j = 0; j < 4; j++) {


      var celda = document.createElement("td");
      //var imagenes=document.createElement("img");
      //var textoCelda = document.createTextNode("celda en la hilera "+i+", columna "+j);
      var miImagen = new Image();
      var link = "img/img1/img" + x + ".jpg";

      miImagen.src = link;

      //var ancho= miImagen.width;

      //alert(ancho);

      //imagenes.append(miImagen);
      celda.append(miImagen);
      hilera.appendChild(celda);
      x++;
    }
    tblBody.appendChild(hilera);
  }
  tabla.appendChild(tblBody);

  section.appendChild(tabla);

  tabla.setAttribute("border", "2");
}

function genera_tabla_dos() {

  var lista = [
    "img/img1/img0.jpg",
    "img/img1/img1.jpg",
    "img/img1/img2.jpg",
    "img/img1/img3.jpg",
    "img/img1/img4.jpg",
    "img/img1/img5.jpg",
    "img/img1/img6.jpg",
    "img/img1/img7.jpg",
    "img/img1/img8.jpg",
    "img/img1/img9.jpg",
    "img/img1/img10.jpg",
    "img/img1/img11.jpg",
    "img/img1/img12.jpg",
    "img/img1/img13.jpg",
    "img/img1/img14.jpg",
    "img/img1/img15.jpg"

  ]

  lista = lista.sort(function () { return Math.random() - 0.5 });

  //console.log(lista);

  var section = document.getElementsByTagName("section")[0];

  var tabla = document.createElement("table");
  var tblBody = document.createElement("tbody");
  var contador=0;

  for (var i = 0; i < 4; i++) {

    var hilera = document.createElement("tr");

    for (var j = 0; j < 4; j++) {

      var celda = document.createElement("td");
      //var imagenes=document.createElement("img");
      //var textoCelda = document.createTextNode("celda en la hilera "+i+", columna "+j);
      //console.log(textoCelda);
      var miImagen = new Image();
     
        //var link = "img/img1/fila-" + i + "-col-" + j + ".jpg";

        /*var posicion=i+j;
        console.log(posicion);*/

        //console.log(celda.substring(0,5));
        /*var link;
        lista.forEach(function (valor, indice, array) {
          console.log("En el índice " + indice + " hay este valor: " + valor);
          //link=valor[0];
        });*/
        /*console.log(valor);
        link=valor[0];*/
        //  var link=valor[0];
        //r link=;
        //console.log(lista[1]);
    
      /* lista.forEach(function (valor, indice, array) {
          console.log("En el índice " + indice + " hay este valor: " + valor);
           miImagen.src = lista[valor];
        });*/
      link=lista[contador++];

      miImagen.src = link;

      celda.append(miImagen);
      hilera.appendChild(celda);

        //contador++;
    }
    tblBody.appendChild(hilera);

  }
  tabla.appendChild(tblBody);

  section.appendChild(tabla);

  tabla.setAttribute("border", "2");
}
/*var lista = [
  "img/img1/fila-0-col-0.jpg",
  "img/img1/fila-0-col-1.jpg",
  "img/img1/fila-0-col-2.jpg",
  "img/img1/fila-0-col-3.jpg",
  "img/img1/fila-1-col-0.jpg",
  "img/img1/fila-1-col-1.jpg",
  "img/img1/fila-1-col-2.jpg",
  "img/img1/fila-1-col-3.jpg",
  "img/img1/fila-2-col-0.jpg",
  "img/img1/fila-2-col-1.jpg",
  "img/img1/fila-2-col-2.jpg",
  "img/img1/fila-2-col-3.jpg",
  "img/img1/fila-3-col-0.jpg",
  "img/img1/fila-3-col-1.jpg",
  "img/img1/fila-3-col-2.jpg",
  "img/img1/fila-3-col-3.jpg",

]

function mezclar_tabla() {


  lista = lista.sort(function () { return Math.random() - 0.5 });

  lista.forEach(function (valor, indice, array) {
    console.log("En el índice " + indice + " hay este valor: " + valor);
  });




}*/

/*var lista = [0,1,2,3,4];
lista = lista.sort(function() {return Math.random() - 0.5});
document.write(lista[0]);
document.write(lista[1]);
document.write(lista[2]);
document.write(lista[3]);
document.write(lista[0]);
document.write(lista[1]);
document.write(lista[2]);
document.write(lista[3]);
document.write(lista[4]);*/
/*
  var lista = [0,1,2,3];
  var lista2 = [0,1,2,3];

  lista = lista.sort(function() {return Math.random() - 0.5});
  lista2 = lista2.sort(function() {return Math.random() - 0.5});

  for(var x=0; x<lista.length;x++){
    //document.write(lista[i]);
    console.log(lista[x]);

    for(var g=0; lista2.length;g++){
      //document.write(lista2[i]);
      console.log(lista2[g]);


    }


  }
  */
/*
  document.write(lista[0]);
  document.write(lista[1]);
  document.write(lista[2]);
  document.write(lista[3]);
  //document.write("Segunda lista");


  document.write(lista2[0]);
  document.write(lista2[1]);
  document.write(lista2[2]);
  document.write(lista2[3]);
  document.write(lista2[4]);
*/


/*

var lista = [0,1,2,3];
var lista2 = [0,1,2,3,4];

lista = lista.sort(function() {return Math.random() - 0.5});
lista2 = lista2.sort(function() {return Math.random() - 0.5});

document.write(lista[0]);
document.write(lista[1]);
document.write(lista[2]);
document.write(lista[3]);
//document.write("Segunda lista");


document.write(lista2[0]);
document.write(lista2[1]);
document.write(lista2[2]);
document.write(lista2[3]);
document.write(lista2[4]);

*/
/*
var miArray = [2, 4, 6, 8, 10];
miArray.forEach(function (valor, indice, array) {
  console.log("En el índice " + indice + " hay este valor: " + valor);
});
*/





