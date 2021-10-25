var datos = [];



var capturar = function (){
    var val1 = document.getElementById("valor1").value;
    var val2 = document.getElementById("valor2").value;
    var val3 = document.getElementById("valor3").value;
    var val4 = document.getElementById("valor4").value;
    
    datos.push({nombre:val1,apellido:val2,telefono:val3,edad:val4})
    console.log(datos)
    var cadenaTexto =  JSON.stringify(datos)
    localStorage.setItem("datos", cadenaTexto)
}

