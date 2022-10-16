/**global scope let **/
let globalScopeLet = "Global Scope let";

function functionScope(){
    let functionScopeLet = "Function Scope Let";
}

console.log(functionScopeLet);

if(!true){
    let blockScopeLet = "Block Scope Let";
}

console.log(blockScopeLet);
