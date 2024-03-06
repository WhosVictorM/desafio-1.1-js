const rs = require("readline-sync")

function validarCpf(cpf) {
    if(cpf.length !== 11){
        return false
    }
    return true
}

function validarIdade(dataNascimento) {
    const [dia, mes, ano] = dataNascimento.split("/")
    const dataAtual = new Date()
    const idade = dataAtual.getFullYear() - ano
    return idade >= 18
}

function validarRenda(renda) {
    return !isNaN(parseFloat(renda)) && isFinite(renda)
}

function validarEstadoCivil(estadoCivil){
    return ["C", "S", "V", "D"].includes(estadoCivil.toUpperCase())
}

function validarDependentes(dependentes) {
    return !isNaN(parseInt(dependentes)) && parseInt(dependentes) >=0 && parseInt(dependentes) <= 10
}

function formatarData(dataNascimento) {
    const [dia, mes, ano] = dataNascimento.split("/")
    return `${dia.padStart(2,"0")}/${mes.padStart(2,"0")}/${ano}`
}

function formatarCpf(cpf) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
}

function formatarRenda(renda) {
    return parseFloat(renda).toFixed(2)
}

let nome, cpf, dataNascimento, renda, estadoCivil, dependentes

do {
    nome = rs.question("Informe o NOME (pelo menos 5 caracteres): ")
} while (nome.length < 5);

do {
    cpf = rs.question("Informe o CPF (exatamente 11 dígitos): ")
} while (!validarCpf(cpf));

do {
    dataNascimento = rs.question("Informe a DATA de NASCIMENTO (DD/MM/YYYY): ")
} while (!validarIdade(dataNascimento));

do {
    renda = rs.question("Informe a RENDA MENSAL (valor com duas casa decimais): ")
} while (!validarRenda(renda));

do {
    estadoCivil = rs.question("Informe o ESTADO CIVIL (C, S, V ou D): ")
} while (!validarEstadoCivil(estadoCivil));

do {
    dependentes = rs.question("Informe a quantidade de DEPENDENTES (0 à 10): ")
} while (!validarDependentes(dependentes));

console.log('\n----- Dados do cliente: -----\n');
console.log(`Nome: ${nome}`);
console.log(`CPF: ${formatarCpf(cpf)}`);
console.log(`Data de nascimento: ${formatarData(dataNascimento)}`);
console.log(`Renda mensal: R$ ${formatarRenda(renda)}`);
console.log(`Estado civil: ${estadoCivil}`);
console.log(`Dependentes: ${dependentes}`);