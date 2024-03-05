const rs = require("readline-sync")
const Vertice = require("./Class/Vertice")
const Triangulo = require("./Class/Triangulo")

const triangulos = []

function lerCoords(num) {
    const coords1 = rs.question(`Digite as coordenadas do vertice ${num} (x,y): `).split(" ").map(Number)
    return new Vertice(coords1[0], coords1[1])
}

const vert1 = lerCoords(1)
const vert2 = lerCoords(2)
const vert3 = lerCoords(3)

try {
    const triangulo = new Triangulo(vert1, vert2, vert3)
    triangulos.push(triangulo)
} catch (error) {
    console.log(error.message);
}

triangulos.forEach((triangulo, index) => {
    console.log(`\nTriângulo ${index + 1}:`);
    console.log(`Perímetro: ${triangulo.getPerimetro()}`);
    console.log(`Tipo: ${triangulo.tipo()}`);
    console.log(`Área: ${triangulo.getArea()}`);
    console.log(`Clone: ${triangulo.clone()}`);
});