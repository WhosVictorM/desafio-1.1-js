const Aluno = require("./Aluno")

class Turma{
    #alunos

    constructor() {
        this.#alunos = []
    }

    inserirAluno(matricula, nome){
        if(this.#alunos.some(aluno => aluno.matricula === matricula)){
            console.log("Já existe um aluno com essa matrícula");
            return;
        }
        this.#alunos.push(new Aluno(matricula, nome))
    }

    removerAluno(matricula){
        this.#alunos = this.#alunos.filter(aluno => aluno.matricula !== matricula)
    }

    lancarNota(matricula, prova, nota){
        const aluno = this.#alunos.find(aluno => aluno.matricula === matricula)

        if(aluno){
            if(prova === "p1"){
                aluno.setNotaP1(nota)
            } else if (prova === "p2"){
                aluno.setNotaP2(nota)
            } else {
                console.log("Prova Inválida. (P1 ou P2)");
            }
        } else {
            console.log("Aluno não encontrado.");
        }
    }

    imprimirAlunos(){
        const alunos = this.#alunos.sort((a,b) => a.nome.localeCompare(b.nome))
        
        alunos.forEach(aluno => {
            console.log(`\nMatrícula: ${aluno.matricula} | Nome: ${aluno.nome} | NF: ${aluno.calcularNotaFinal()}`);
        })
    }
}

module.exports = Turma