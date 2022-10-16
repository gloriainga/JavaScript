/**
 * {
 *  username: 'string',
 *  password: 'string',
 *  grant_type: 'string'
 * }
 * **/

const login = {
    usuario: "admin",
    clave: "123456",
}

const userToLogin = {
    username: login.usuario,
    password: login.clave,
    grant_type: "JWT"
}

const username = "gloria@gmail.com";
const password = "345567";
const grant_type = "JWT";

const userToLogin2 = {
    username,
    password,
    grant_type
}

console.log(userToLogin2);