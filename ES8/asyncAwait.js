import axios from "axios"

async function getRequestApi(url){
    try{
       const response = await axios.get(url);    
       const data = response.data; 
       return data;
    }catch(error){
        console.log(error);
    }    
};

(async() => {
    const characters = await getRequestApi("https://rickandmortyapi.com/api/character");
    const idCharacter = characters.results[0].id;
    console.log(`El ID del personaje es: ${idCharacter}`);
    const character = await getRequestApi(`https://rickandmortyapi.com/api/character/${idCharacter}`);
    console.log(`El nombre del personaje es: ${character.name}`);
})();

//el await sirve para extraer resultados de la promesa
//el async transfroma el return de una funcion en una promesa. Encapsula
//el return en una promesa.

//una promesa se puede resolver con el then y se puede resolver con el asyn y await
//el await hace que nuestro codigo no continue hasta resolver esa promesa,
//hasta que no resuleva la promesa va a esperar y despues va a continuar, eso hace
//que se convierta en un codigo lineal
