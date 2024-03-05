class Triangulo {
    #vertice1
    #vertice2
    #vertice3

    constructor(vertice1, vertice2, vertice3) {
        this.#vertice1 = vertice1;
        this.#vertice2 = vertice2;
        this.#vertice3 = vertice3;

        if (!this.formaTriangulo()) {
            throw new Error("Os vértices fornecidos não formam um triângulo.");
        }
    }

    getVertices(){
        return [this.#vertice1, this.#vertice2, this.#vertice3]
    }

    formaTriangulo() {
        const lado1 = parseFloat(this.#vertice1.distancia(this.#vertice2));
        const lado2 = parseFloat(this.#vertice1.distancia(this.#vertice3));
        const lado3 = parseFloat(this.#vertice2.distancia(this.#vertice3));

        return lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1;
    }

    equals(outroTriangulo) {
        return this.#vertice1.getX() === outroTriangulo.vertice1.getX() && this.#vertice1.getY() === outroTriangulo.vertice1.getY() &&
        this.#vertice2.getX() === outroTriangulo.vertice2.getX() && this.#vertice2.getY() === outroTriangulo.vertice2.getY() &&
        this.#vertice3.getX() === outroTriangulo.vertice3.getX() && this.#vertice3.getY() === outroTriangulo._vertice3.getY();
    }

    getPerimetro() {
        const a = this.#vertice1.distancia(this.#vertice2);
        const b = this.#vertice2.distancia(this.#vertice3);
        const c = this.#vertice3.distancia(this.#vertice1);

        return parseFloat(a + b + c).toFixed(2);
    }

    tipo() {
        const lado1 = this.#vertice1.distancia(this.#vertice2);
        const lado2 = this.#vertice1.distancia(this.#vertice3);
        const lado3 = this.#vertice2.distancia(this.#vertice3);

        if (lado1 === lado2 && lado2 === lado3) {
            return "equilátero";
        } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
            return "isósceles";
        } else {
            return "escaleno";
        }
    }

    clone() {
        return new Triangulo(this.#vertice1, this.#vertice2, this.#vertice3);
    }

    getArea() {
        const a = this.#vertice1.distancia(this.#vertice2);
        const b = this.#vertice2.distancia(this.#vertice3);
        const c = this.#vertice3.distancia(this.#vertice1);
        const semiperimetro = this.getPerimetro() / 2;
        return parseFloat(Math.sqrt(semiperimetro * (semiperimetro - a) * (semiperimetro - b) * (semiperimetro - c)).toFixed(2));
    }
}

module.exports = Triangulo