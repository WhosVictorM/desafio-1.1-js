const rs = require("readline-sync")
const Vertice = require("./Class/Vertice")

function lerCoords(num) {
    const coords1 = rs.question(`Digite as coordenadas do vertice ${num} (x,y): `).split(" ").map(Number)
    return new Vertice(coords1[0], coords1[1])
}

function distEscolha([]) {
    if (distancia[0] === 1) {
        if (distancia[1] === 2){
            console.log(vert1.distancia(vert2))  
        } else if (distancia[1] === 3){
            console.log(vert1.distancia(vert3))
        }
    } else if (distancia[0] === 2){
        if (distancia[1] === 1){
            console.log(vert2.distancia(vert1))
        } else if (distancia[1] === 3){
            console.log(vert2.distancia(vert3))
        }
    } else if (distancia[0] === 3){
        if (distancia[1] === 2){
            console.log(vert3.distancia(vert2))
        } else if (distancia[1] === 1){
            console.log(vert3.distancia(vert1))
        }
    }
}

function moveCoords(escolha){
    if(escolha === 1){
        const coords = rs.question(`\nDigite as coordenadas do vertice ${escolha} (x,y): `).split(" ").map(Number)
        vert1.move(coords[0], coords[1])
        console.log(`\nO Vertice ${escolha} foi movido para as coordenadas (${vert1.getX()}, ${vert1.getY()})`);
    } else if (escolha === 2){
        const coords = rs.question(`\nDigite as coordenadas do vertice ${escolha} (x,y): `).split(" ").map(Number)
        vert2.move(coords[0], coords[1])
        console.log(`\nO Vertice ${escolha} foi movido para as coordenadas (${vert2.getX()}, ${vert2.getY()})`);
    } else if (escolha === 3) {
        const coords = rs.question(`\nDigite as coordenadas do vertice ${escolha} (x,y): `).split(" ").map(Number)
        vert3.move(coords[0], coords[1])
        console.log(`\nO Vertice ${escolha} foi movido para as coordenadas (${vert3.getX()}, ${vert3.getY()})`);
    } else {
        console.log("Vertice não encontrado");
    }
}

function vertEquals([]) {
    if (equals[0] === 1) {
        if (equals[1] === 2){
            console.log(vert1.equals(vert2))  
        } else if (equals[1] === 3){
            console.log(vert1.equals(vert3))
        }
    } else if (equals[0] === 2){
        if (equals[1] === 1){
            console.log(vert2.equals(vert1))
        } else if (equals[1] === 3){
            console.log(vert2.equals(vert3))
        }
    } else if (equals[0] === 3){
        if (equals[1] === 2){
            console.log(vert3.equals(vert2))
        } else if (equals[1] === 1){
            console.log(vert3.equals(vert1))
        }
    }
}

const vert1 = lerCoords(1)

const vert2 = lerCoords(2)

const vert3 = lerCoords(3)


const escolha = Number(rs.question("Qual vertice voce deseja mover? \n[1] [2] [3]\n"))
moveCoords(escolha)

const distancia = rs.question("\nDigite os dois vertices que voce deseja saber a distancia. Ex: (1, 3) ").split(" ").map(Number)
distEscolha(distancia)

const equals = rs.question("\nDigite os dois vertices para saber se são iguais. Ex: (2, 3) ").split(" ").map(Number)
vertEquals(equals)


