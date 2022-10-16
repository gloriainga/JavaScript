/**global scope var **/
var globalScopeVar = "Global Scope var";

/**function scope var **/
function functionScope(){
    var functionScopeVar = "Function Scope Var"; 
    var  printMessage = function(){
        console.log(functionScopeVar);
    } 
}

 console.log(functionScopeVar);

 /**block scope var **/

 if(!true){
     var blockScopeVar = "Block Scope Var";
 }

 console.log(blockScopeVar);

 var blockScopeVar = undefined;
 if(!true){
     var blockScopeVar = "Block Scope Var";
 }