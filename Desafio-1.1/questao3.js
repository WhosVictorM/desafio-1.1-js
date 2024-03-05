const readlineSync = require("readline-sync");
const Vertice = require("./Class/Vertice");
const Poligono = require("./Class/Poligono");

const vertices = [];

console.log(
  "Digite as coordenadas dos vértices do polígono. Digite 'fim' para terminar."
);

let input = readlineSync.question("Digite as coordenadas do vertice (x,y): ");

while (input !== "fim") {
  const [x, y] = input.split(" ").map(Number);
  vertices.push(new Vertice(x, y));
  input = readlineSync.question(
    "Digite as coordenadas do proximo vertice (x,y): "
  );
}

try {
  const poligono = new Poligono(vertices);
  console.log("\nPolígono criado com sucesso!");
  console.log("Perímetro:", poligono.getPerimetro());
  console.log("Quantidade de vértices:", poligono.qtdVertices);
} catch (error) {
  console.log("Erro ao criar polígono:", error.message);
}
