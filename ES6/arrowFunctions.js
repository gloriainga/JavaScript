function printMessage(){
    console.log("Message");
}

const suma = (a, b) => a + b;

const printMessage = () => {
    console.log("Message");
}

() => {
    console.log("Message");
}

/** THIS **/
function product(){
   this.name = "iPad";
   this.price = 100; 
   this.printInfo = function(){
      setTimeout(function(){
           console.log(this);
       }, 5000);       
   }
}
/** new = Object.create() **/
var product = new product();
product.printInfo();

function hello(){ 
   console.log(this);
}

hello();

/** THIS **/
function product(){
   this.name = "iPad";
   this.price = 100; 
   this.printInfo = function(){
      setTimeout(() => {
           console.log(this);
       }, 1000);       
   }
}
/** new = Object.create() **/
var product = new product();
product.printInfo();



