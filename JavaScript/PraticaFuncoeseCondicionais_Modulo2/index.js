/**
 * Exercício: Funções Matemáticas em JavaScript
 *
 * Objetivo:
 * Criar funções para realizar operações matemáticas básicas
 * e uma função responsável por exibir os resultados no console.
 *
 * Requisitos:
 * - Usar function tradicional
 * - Criar funções de soma, subtração, multiplicação e divisão
 * - Criar uma função que mostre o resultado de todas as operações
 * - Usar console.log no formato:
 *   console.log([nome_da_operacao] entre ${num1} e ${num2}, fn(num1, num2))
 */

// Função que recebe dois números e retorna a soma
function soma(num1, num2) {
  return num1 + num2;
}

// Função que recebe dois números e retorna a diferença
function subtrai(num1, num2) {
  return num1 - num2;
}

// Função que recebe dois números e retorna o produto
function multiplica(num1, num2) {
  return num1 * num2;
}

// Função que recebe dois números e retorna o quociente
function divide(num1, num2) {
  return num1 / num2;
}

// Função responsável por mostrar os resultados no console
function mostraResultado(num1, num2) {
  console.log(`Soma entre ${num1} e ${num2}`, soma(num1, num2));
  console.log(`Subtração entre ${num1} e ${num2}`, subtrai(num1, num2));
  console.log(`Multiplicação entre ${num1} e ${num2}`, multiplica(num1, num2));
  console.log(`Divisão entre ${num1} e ${num2}`, divide(num1, num2));
}

// Chamada da função principal
mostraResultado(120, 30);
