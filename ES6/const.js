/**global scope const **/
const globalScopeConst = "Global Scope Const";

function functionScope(){
    const functionScopeConst = "Function Scope Const";
}

console.log(functionScopeConst);

if(!true){
    const blockScopeConst = "Block Scope Const";
}

console.log(blockScopeConst);

const API_KEY_GMAPS = "3456333578DAS444XX";
API_KEY_GMAPS = "ABCDE";

const userData = {
    name: "Carmen",
    age: 30
}

userData.age = 20;
userData.lastname = "Vegas";
console.log(userData);