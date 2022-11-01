const publish = {
  title: "ECMA Script 11",
  active: 1,
  tag: ["es11", "js"],
};

//const authorName = (publish.author ?? {}).name ?? "No existe autor.";
//const authorName = (publish.author && publish.author.name) ?? "No existe autor";

const authorName = publish.author?.name ?? "No existe Autor";

console.log(authorName);

//que nos dice optional chaining? si tu autor tiene un valor entonces
//vamos a extraer 
//su nombre pero si es indefinido o nulo el autor "no existe autor"