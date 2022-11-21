// Nome
let nome = document.querySelector('#nome');
let nomeErro = document.querySelector('#nomeErro');

// Email
let email = document.querySelector('#email');
let emailErro = document.querySelector('#emailErro');

// Assunto
let assunto = document.querySelector('#assunto');
let assuntoErro = document.querySelector('#assuntoErro');

// Variáveis Auxiliáveis de Validação
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;

// Mapa
let mapa = document.querySelector('#mapa');

function validaNome() {
    if (nome.value.length < 3) {
        nomeErro.innerHTML = 'Nome Inválido'
    } else {
        nomeErro.innerHTML = ''
        nomeOk = true
    }
}

function validaEmail() {
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        emailErro.innerHTML = 'Email Inválido'
    } else {
        emailErro.innerHTML = ''
        emailOk = true
    }
}

function validaAssunto() {
    if (assunto.value.length > 100) {
        assuntoErro.innerHTML = 'Limite de Caracteres Excedidos (Limite de 100 Caracteres)'
    } else {
        assuntoErro.innerHTML = ''
        assuntoOk = true
    }
}

function enviar() {
    if (nomeOk && emailOk && assuntoOk) {
        alert('Email enviado com sucesso')
    } else {
        alert('Preencha as informações corretas >:[')
    }
}