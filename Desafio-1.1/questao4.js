const rs = require("readline-sync")
const Aluno = require("./Class/Aluno")
const Turma = require("./Class/Turma")

const turma1 = new Turma()

function lerDadosAluno() {
    const matricula = rs.question("\nMatricula do Aluno: ")
    const nome = rs.question("\nNome do Aluno: ")
    const notaP1 = parseFloat(rs.question("\nNota P1 (ou deixe em branco em caso de falta): "))
    const notaP2 = parseFloat(rs.question("\nNota P2 (ou deixe em branco em caso de falta): "))

    return {nome, matricula, notaP1, notaP2}
}

turma1.inserirAluno("123", "João")
turma1.lancarNota("123", "p1", 8.5)
turma1.inserirAluno("321", "Bárbara")
turma1.lancarNota("321", "p2", 10)

for (let i = 0; i < 2; i++) {
    const dadosAluno = lerDadosAluno();
    turma1.inserirAluno(dadosAluno.matricula, dadosAluno.nome);
    turma1.lancarNota(dadosAluno.matricula, "p1", dadosAluno.notaP1);
    turma1.lancarNota(dadosAluno.matricula, "p2", dadosAluno.notaP2);
    
}

turma1.imprimirAlunos()