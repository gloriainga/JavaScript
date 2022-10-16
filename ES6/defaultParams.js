function printMessage(message){
    message = typeof message !== "undefined" ? message : "valor por defecto";
    console.log(`Mensaje: ${message}`);
}

function printMessage(message = "Valor por defecto"){
    console.log(`Mensaje: ${message}`);
}

printMessage(null); 
printMessage("");
printMessage(undefined);
printMessage();