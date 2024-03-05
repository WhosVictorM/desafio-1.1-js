class Poligono {
  #vertices;

  constructor(vertices) {
    if (vertices.length < 3) {
      throw new Error("O polígono deve ter pelo menos 3 vértices.");
    }

    this.#vertices = [];
    vertices.forEach((vertice) => {
      if (!this.#vertices.some((v) => v.equals(vertice))) {
        this.#vertices.push(vertice);
      }
    });
  }

  addVertice(vertice) {
    if (!this.#vertices.some((v) => v.equals(vertice))) {
      this.#vertices.push(vertice);
      return true;
    }
    return false;
  }

  getPerimetro() {
    let perimetro = 0;
    for (let i = 0; i < this.#vertices.length; i++) {
      const verticeAtual = this.#vertices[i];
      const proximoVertice = this.#vertices[(i + 1) % this.#vertices.length];
      perimetro += verticeAtual.distancia(proximoVertice);
    }
    return perimetro;
  }

  get qtdVertices() {
    return this.#vertices.length;
  }
}

module.exports = Poligono;
