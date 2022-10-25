const request = require("request");

/*function getRequestApi(url, callback){     
    request.get(url, function(error, response, body){
       callback(JSON.parse(body));
    });  
}

getRequestApi("https://rickandmortyapi.com/api/character", function(characters){
    const idCharacter = characters.results[0].id;
    console.log(`El ID del personaje es: ${idCharacter}`); 
    getRequestApi(`https://rickandmortyapi.com/api/character/${idCharacter}`, function(character){
        console.log(`El nombre del personaje es: ${character.name}`); 
    } 
    );
});*/

function getRequestApi(url){
    return new Promise((resolve, reject) => {
        request.get(url, function(error, response, body){
          if(error) reject("500 - Error interno");
          resolve(JSON.parse(body));  
        });
    });
}

getRequestApi("https://rickandmortyapi.com/api/character").then(
    (characters) => {
        const idCharacter = characters.results[0].id;
        console.log(`El ID del personaje es: ${idCharacter}`);
        return getRequestApi(`https://rickandmortyapi.com/api/character/${idCharacter}`);
    }
)
.then(character => {
    console.log(`El nombre del personaje es: ${character.name}`);
})
.catch(error => console.log(error));