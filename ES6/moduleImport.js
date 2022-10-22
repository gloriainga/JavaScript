/*import {API_KEY, printMessage} from "./moduleExport.js";
console.log(API_KEY);
printMessage("Ejecutando funcion desde el IMPORT");*/

import * as ModuleExport from "./moduleExport.js";
console.log(ModuleExport.API_KEY);
ModuleExport.printMessage("Ejecutando funcion desde el IMPORT");


/*(1)todo lo que se exporta por default es sin llaves 
import API_KEY from "./moduleExport.js";
console.log(API_KEY) imprime API_KEY y printMessage*/

 /* (2)todo lo que se exporta sin default es con llaves {} 
 import {API_KEY} from "./moduleExport.js";
 console.log(API_KEY) imprime solo el API_KEY

 import {printMessage} from "./moduleExport.js";
 console.log(printMessage) imprime solo el printMessage

 si quiero que imprima los dos
 import {API_KEY, printMessage} from "./moduleExport.js";  
 console.log(API_KEY); 
 printMessage("Ejecutando funcion desde el IMPORT"); 
 */
