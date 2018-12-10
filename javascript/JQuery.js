$(document).ready(function(){


/*.html (inserta texto cambiandolo)

.text(inserta texto)

.append (inserta texto detras)

.prepend (inserta texto delante)

.before(inserta (lo que sea/elemento ) antes del elemento que hayamos seleccionado)

.after(inserta(lo que sea/elemento) despues del elemento que hayamos seleccionado)

.remove(eliminar)

.remplacewith(cambiar el contenido con lo que pongas dentro del parentesis)

boton.addEvenListener("click", "funcion(cerrarbanner)", "booleano--> false")--> esta escuchando

document.getElementById("id_banner").addEvenLoistener("click", "funcion(cerrarbanner)", "booleano--> false")--> esta escuchando

.addClass(Añade el nombre de una clase)

.removeClass(esa clase deje de existir para un elemento)

*/
/*
document. querySelectorAll("identidicadod img")

for


for (var i=0, imagenes,lengh,; i++){
    imagenes[i].addEvenlistener
}

querySelectorAll

for

function aumentar(e){
if(e.target==aumento){
    sitio=texto1
}
}
var porDefecto=$sitio.css("font-size");
pordefecto.parsetInt();
pordefecto*1.1:


MODIFICAR EL HTML

var imagen!=document.get....addEvenListener("mouseover", activa, false);  
imagen1=......(mouseover, inactive)

function activa(){
   
$("#img1").attr("src","img/img2.png" );
}

function desactiva(){

}

document.querySelectorAll("img");

for(var i=0; i<imagenes.lengt; i++){
    imagenes[i]=document.addEvenListener("mouseover", active, false);
     imagenes[i]=document.addEvenListener("mouseout", desactive, false);

}

function activa(e){
   if(e.target==img1){
       $("#img1").attr("src","img/img1.png" );
   }
  if(e.target==img2){
       $("#img1").attr("src","img/img2.png" );
   }
   if(e.target==img3){
       $("#img1").attr("src","img/img3.png" );
   }
   if(e.target==img4){
       $("#img1").attr("src","img/img4.png" );
   }
$("#img1").attr("src","img/img2.png" );
}

function desactiva(){

}


*/



/*Ejercicio Ejemplo  BUTTON FILTER
<!DOCTYPE html>
<html>
<style>
.filterDiv {
  float: left;
  background-color: #2196F3;
  color: #ffffff;
  width: 100px;
  line-height: 100px;
  text-align: center;
  margin: 2px;
  display: none;
}

.show {
  display: block;
}

.container {
  margin-top: 20px;
  overflow: hidden;
}

/* Style the buttons 
.btn {
    border: none;
    outline: none;
    padding: 12px 16px;
    background-color: #f1f1f1;
    cursor: pointer;
  }
  
  .btn:hover {
    background-color: #ddd;
  }
  
  .btn.active {
    background-color: #666;
    color: white;
  }
  </style>
  <body>
  
  <h2>Filter DIV Elements</h2>
  
  <div id="myBtnContainer">
    <button class="btn active" onclick="filterSelection('all')"> Show all</button>
    <button class="btn" onclick="filterSelection('cars')"> Cars</button>
    <button class="btn" onclick="filterSelection('animals')"> Animals</button>
    <button class="btn" onclick="filterSelection('fruits')"> Fruits</button>
    <button class="btn" onclick="filterSelection('colors')"> Colors</button>
  </div>
  
  <div class="container">
    <div class="filterDiv cars">BMW</div>
    <div class="filterDiv colors fruits">Orange</div>
    <div class="filterDiv cars">Volvo</div>
    <div class="filterDiv colors">Red</div>
    <div class="filterDiv cars animals">Mustang</div>
    <div class="filterDiv colors">Blue</div>
    <div class="filterDiv animals">Cat</div>
    <div class="filterDiv animals">Dog</div>
    <div class="filterDiv fruits">Melon</div>
    <div class="filterDiv fruits animals">Kiwi</div>
    <div class="filterDiv fruits">Banana</div>
    <div class="filterDiv fruits">Lemon</div>
    <div class="filterDiv animals">Cow</div>
  </div>
  
  <script>
  filterSelection("all")
  function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
      w3RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
  }
  
  function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
    }
  }
  
  function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);     
      }
    }
    element.className = arr1.join(" ");
  }
  
  // Add active class to the current button (highlight it)
  var btnContainer = document.getElementById("myBtnContainer");
  var btns = btnContainer.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
  </script>
  
  </body>
  </html>
  







for (){
  var fila=document.createElement()

 tabla= set atributte
}

*/
