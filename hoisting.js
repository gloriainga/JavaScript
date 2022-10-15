/*Repo del profe*/
console.log(message);

var message = "Hoisting";

/**
 *
 *
 *
 * HOISTING CON VARIABLES
 *
 *
 *
 *
 * **/
var message = undefined;
console.log(message);

message = "Hoisting";

/**
 *
 *
 *
 * HOISTING CON FUNCIONES
 * SI -> VAR Y FUNCTION
 * NO -> CONST Y LET
 * NO -> FUNCIONES ANONIMA
 *
 * **/

function printMessage() {
  console.log("Hoisting");
}
printMessage();

/**
 *
 * HOISTING
 * FUNCTION & VAR
 *
 * **/

console.log(message);
function message() {
  console.log("Funcion");
}

var message = "Variable";
/*Fin de repo*/

/***************************************/

console.log(message);
var message = "hoisting";

/**Hoisting**/
var message = undefined;
console.log(message);
message = "hoisting";

printMessage("javascript");
function printMessage(msg){
    console.log(msg);
}

/*evitamos el hoisting con let y const*/
const printMessage = function(msg){};
const printMessage2 = (msg) => {}

/*cuando hay hoisting de variables y funciones y la funcion y la variable
se llaman igual, primero se declara la funcion*/
var objeto = "Objeto VAR";
function objeto(){
    return "Objeto FUN";
}
console.log(objeto);

/*con hoisting*/
function objeto(){
    return "Objeto FUN";
}
var objeto = undefined;
objeto = "Objeto VAR";
console.log(objeto);