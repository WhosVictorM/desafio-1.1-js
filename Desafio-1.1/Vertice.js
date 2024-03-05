class Vertice {
    #x;
    #y;

    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }

    getX() {
        return this.#x;
    }

    getY() {
        return this.#y;
    }

    getVertice(){
        return [this.#x, this.#y]
    }

    distancia(outro) {
        return parseFloat((Math.sqrt(Math.pow(this.#x - outro.getX(), 2) + Math.pow(this.#y - outro.getY(), 2))).toFixed(2));
    }

    move(x, y) {
        this.#x = x;
        this.#y = y;
    }

    equals(outro) {
        return this.#x === outro.getX() && this.#y === outro.getY();
    }
}

module.exports = Vertice