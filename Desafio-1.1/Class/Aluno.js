class Aluno {
    #nome
    #matricula
    #notaP1
    #notaP2

    constructor(matricula, nome, notaP1 = null, notaP2 = null) {
        this.#matricula = matricula
        this.#nome = nome
        this.#notaP1 = notaP1
        this.#notaP2 = notaP2
    }

    get matricula(){
        return this.#matricula
    }
    get nome(){
        return this.#nome
    }
    get notaP1(){
        return this.#notaP1
    }

    get notaP2(){
        return this.#notaP2
    }

    setNotaP1(nota){
        this.#notaP1 = nota
    }
    
    setNotaP2(nota){
        this.#notaP2 = nota
    }

    calcularNotaFinal(){
        if(this.#notaP1 === null && this.#notaP2 === null){
            return 0
        } else if (this.#notaP1 !== null && this.#notaP2 === null){
            return this.#notaP1 / 2
        } else if (this.#notaP1 === null && this.#notaP2 !== null){
            return this.#notaP2 / 2
        } else {
            return parseFloat(((this.#notaP1 + this.#notaP2) / 2).toFixed(2))
        }
    }
}

module.exports = Aluno