/** ARRAY DE VALORES => LISTA DE VALORES **/
/**OBJETO DE PROPIEDADES => LISTA DE PROPIEDADES Y VALORES **/

const arrayValues = ["Pablo", "Javascript", "ES6", true, 1, false];
//console.log(...arrayValues);

const arrayData = ["Pablo", "Blanco", "2022", ...arrayValues];
console.log(arrayData);
//los arrays trabajan por posicion y los objetos por propiedad

var userData = {
    username: "Moreno",
    password: "123456",
    activo: true,
    fullName: "Marcial Moreno"
};

var changePassword = {
    username: "anonymous",
    password: "P4$$wOrd"
};

userData = {
    ...userData,
    ...changePassword
}
console.log(userData);