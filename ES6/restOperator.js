/**LISTA DE VALORES -> ARRAY DE VALORES **/
function printMessage(title, ...argumentos){
    console.log(title);
    //console.log(subtitle);
    console.log(argumentos);
    console.log(arguments);
}

printMessage("ECMAScript", "ES6", "New Horizons 2022", "Octubre", "Viernes");

const arrayNumbers = ["uno", "dos", "tres"];

const [uno, ...rest] = arrayNumbers;

console.log(uno, rest);

const userData = {
    firstname: "Juan",
    lastName: "Correa",
    email: "jcorrea@gmail.com"
}

const {firstname, ...lorestante} = userData;

console.log(firstname, lorestante);