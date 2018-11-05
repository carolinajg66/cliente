function NumeroAletario() {

    var numerosAleatorios = [];
    var text = "";

    for (var i = 0; i < 100; i++) {
        numerosAleatorios.push(Math.round(Math.random() * 100));
        numerosAleatorios.sort();
        numerosAleatorios[i];
        //text += numerosAleatorios[i] + "<br>";
        document.getElementById("uno").innerHTML = numerosAleatorios[0];
        document.getElementById("dos").innerHTML = numerosAleatorios[1];
        document.getElementById("tres").innerHTML = numerosAleatorios[2];
        document.getElementById("cuatro").innerHTML = numerosAleatorios[3];
        document.getElementById("cinco").innerHTML = numerosAleatorios[4];
        document.getElementById("seis").innerHTML = numerosAleatorios[5];
        document.getElementById("siete").innerHTML = numerosAleatorios[7];
        document.getElementById("ocho").innerHTML = numerosAleatorios[8];
        document.getElementById("nueve").innerHTML = numerosAleatorios[9];
        document.getElementById("diez").innerHTML = numerosAleatorios[10];
        document.getElementById("uno").innerHTML = numerosAleatorios[11];
    }

}

NumeroAletario()





 




