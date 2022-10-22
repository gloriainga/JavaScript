const API_KEY = "Aute incididunt incididunt voluptate esse laborum in culpa qui ad ullamco ex excepteur officia officia."

const printMessage = msg => {
    console.log(msg);
}

export { API_KEY, printMessage };

/*el default se pone una vez
export default {API_KEY};
(1) si quiero exportar 2 cosas lo pongo en un objeto 
export default {API_KEY, printMessage};*/

/*(2)si solo quiero acceder al API_KEY y no al printMessage quito el default
export { API_KEY, printMessage }*/