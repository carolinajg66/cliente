function NumeroAletario() {

    var numerosAleatorios = [];
    var text = "";

    for (var i=0; i < 100; i++) {
        numerosAleatorios.push(Math.round(Math.random() * 100));
        text += numerosAleatorios[i] + "<br>";
        document.getElementById("demo").innerHTML = text;
    }
    
}

function ordenar(){


}
NumeroAletario();



