function printMessage(msg){
    setTimeout(function(){
        console.log("SET TIMEOUT 5 SEGUNDOS");
    }, 5000);
    console.log("Inicio de funcion");
    console.log("Mensaje: " + msg);
    console.log("Fin de funcion");
}

function jsRuntime(){
    var msg = "Javascript Runtime 01";
    printMessage(msg);
}

jsRuntime();