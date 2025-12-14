// ================================
// MINI PROJETO: CONTAGEM REGRESSIVA
// ================================


// Define a data futura (ANO, MÊS-1, DIA, HORA, MINUTO, SEGUNDO)
const dataFutura = new Date(2025, 11, 31, 23, 59, 59);


// Função responsável por calcular o tempo restante
function calcularTempoRestante(data) {
const agora = new Date();
const diferenca = data - agora;


// Se a data já passou, retorna null
if (diferenca <= 0) {
return null;
}


// Conversões de tempo
const segundos = Math.floor(diferenca / 1000) % 60;
const minutos = Math.floor(diferenca / 1000 / 60) % 60;
const horas = Math.floor(diferenca / 1000 / 60 / 60) % 24;
const dias = Math.floor(diferenca / 1000 / 60 / 60 / 24);


return { dias, horas, minutos, segundos };
}


// Função que atualiza o conteúdo na tela
function atualizarTemporizador() {
const tempo = calcularTempoRestante(dataFutura);


if (!tempo) {
document.getElementById("timer").innerText = "⏰ Tempo encerrado!";
clearInterval(intervalo);
return;
}


document.getElementById("timer").innerText =
`${tempo.dias}d ${tempo.horas}h ${tempo.minutos}m ${tempo.segundos}s`;
}


// Atualiza o temporizador a cada 1 segundo
const intervalo = setInterval(atualizarTemporizador, 1000);

// adicione no final do script.js
console.log("Script carregado com sucesso!");

