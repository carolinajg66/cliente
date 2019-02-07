
function selecLista(){
    var lista = ['Gato', 'Perro', 'Caballo', 'Ganso', 'Pez', 'Foca', 'Papagayo', 'Coyote', 'Milano', 'Nutria', 'Cotorra', 'Tigre'];
    var lote = [];
  
    // Cantidad aleatoria de elementos basada en la cantidad de elemenos de la variable lista.
    var cantidad = Math.floor((Math.random()*lista.length));
  
    for(var i=0; i<cantidad; i++){
       // Generar un nuevo elemento.
       var nuevo = lista[Math.floor((Math.random()*lista.length))];
  
       // Si el elemento no se encuentra en lote[] agregar (push), en caso
       // de que sea se encuentre (continue;), saltar al siguente.
       if(lote.indexOf(nuevo)!=-1){continue;} else {lote.push(nuevo);}
    }
    document.write(lote);
 };
 selecLista();
/*---------------------------------------------------------------------------------------------*/

 
        var lista = ['Gato', 'Perro', 'Caballo', 'Ganso', 'Pez', 'Foca', 'Papagayo', 'Coyote', 'Milano', 'Nutria', 'Cotorra', 'Tigre'];
	var cantidad = 4;
 
	seleccionar(cantidad, lista);
 
	function seleccionar(cantidad, lista) {
		this.cantidad = cantidad;
		this.lista = lista;
 
		var tamano = lista.length;
		var lote = new Array();
 
		var indice = 0;
		do {
			var aleatorio = lista[parseInt(Math.random()* tamano)];
			if(lote.indexOf(aleatorio)!=-1){
				continue;
			}else{
         		    lote[indice]=aleatorio;
		            indice++;
      		        }
		} while(lote.length < cantidad);
 
		alert(lote);
	}