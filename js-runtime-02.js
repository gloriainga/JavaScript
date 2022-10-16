function jsRuntimePromise() { 
    setTimeout(function(){
        console.log("7");
    }, 0);   
    Promise.resolve("5").then(value => console.log(value));
    Promise.resolve("3").then(value => console.log(value));

    console.log("1");
    console.log("9");
}
jsRuntimePromise();