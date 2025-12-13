function eDeDiaouENoite(hora) {
    // Verifica se a hora está entre 6 e 18 (dia) ou entre 19 e 5 (noite)
    return (hora >= 6 && hora <= 18) ? "Dia" : "Noite";
}
// Testando a função
console.log(eDeDiaouENoite(10));
console.log(eDeDiaouENoite(22));
console.log(eDeDiaouENoite(5));
function verificaNumeroPositivoOuNegativo(numero) {
    // Verifica se o número é positivo, negativo ou zero
    return (numero > 0) ? "Positivo" : (numero < 0) ? "Negativo" : "Zero";
}
function eMaiorDeIdade(idade) {
    // Verifica se a idade é maior ou igual a 18
    if (idade >= 18) {
        return "Maior de idade";
    } else {
        return "Menor de idade";
    }   
}
// Testando a função
console.log(eMaiorDeIdade(20));
console.log(eMaiorDeIdade(16));
console.log(eMaiorDeIdade(18));
console.log(eMaiorDeIdade(12));

console.log("----- Testando verificaNumeroPositivoOuNegativo -----");

function verificaNumeroPositivoOuNegativo(numero) {
    // Verifica se o número é positivo, negativo ou zero
    return (numero > 0) ? "Positivo" : (numero < 0) ? "Negativo" : "Zero";
}
// Testando a função
console.log(verificaNumeroPositivoOuNegativo(10));
console.log(verificaNumeroPositivoOuNegativo(-5));
console.log(verificaNumeroPositivoOuNegativo(0));

console.log("----- Testando eParOuImpar -----");

// Verifica se número é par ou ímpar usando operador unário
function eParOuImpar(numero) {
    return (numero % 2 === 0) ? "Par" : "Ímpar";
}

console.log(eParOuImpar(10));
console.log(eParOuImpar(7));    
console.log(eParOuImpar(0));
console.log(eParOuImpar(-4));
console.log(eParOuImpar(-3));

console.log("----- Fim dos testes -----");

console.log("----- Testando menuEscolha -----");

// Função que retorna mensagem baseada na opção do menu usando switch


function menuEscolha(opcaoDoMenu) {
    let mensagem;   
    switch (opcaoDoMenu) {
        case 1:
            mensagem = "Você escolheu a opção 1: Iniciar novo jogo.";
            break;
        case 2:
            mensagem = "Você escolheu a opção 2: Carregar jogo salvo.";
            break;
        case 3:
            mensagem = "Você escolheu a opção 3: Configurações.";
            break;
        case 4:
            mensagem = "Você escolheu a opção 4: Sair do jogo.";
            break;
        default:
            mensagem = "Opção inválida. Por favor, escolha uma opção entre 1 e 4.";
    }
    return mensagem;
}

// Testando a função menuEscolha
console.log(menuEscolha(1));
console.log(menuEscolha(3));
console.log(menuEscolha(5));
console.log(menuEscolha(0));
console.log(menuEscolha(2));
console.log(menuEscolha(4));
console.log("----- Fim dos testes do menu -----");

// Testando função Maior de idade com operador ternário
console.log("----- Testando eMaiorDeIdade com operador ternário -----");
function eMaiorDeIdade(idade) {
    // Verifica se a idade é maior ou igual a 18 usando operador ternário
    return (idade >= 18) ? "Maior de idade" : "Menor de idade";  
}
// Testando a função
console.log(eMaiorDeIdade(20));
console.log(eMaiorDeIdade(16));
console.log(eMaiorDeIdade(18));
console.log(eMaiorDeIdade(12));
console.log("----- Fim dos testes de eMaiorDeIdade -----");
