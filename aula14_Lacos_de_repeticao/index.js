// Lacos de repeticao em JavaScript

// 1. Laço "for"
console.log("Laço 'for':");
for (let i = 1; i <= 5; i++) {
    console.log("Contagem:", i);
}   
console.log("-------------------");

// 2. Laço "while"
console.log("Laço 'while':");
let j = 1;  
while (j <= 5) {
    console.log("Contagem:", j);
    j++;
}   
console.log("-------------------");

// 3. Laço "do...while" 
console.log("Laço 'do...while':");
let k = 1;
do {
    console.log("Contagem:", k);
    k++;
} while (k <= 5);
console.log("-------------------"); 
// 4. Laço "for...in" (para objetos)
console.log("Laço 'for...in':");
const pessoa = { nome: "Ana", idade: 25, cidade: "São Paulo" }; 
for (let chave in pessoa) {
    console.log(chave + ":", pessoa[chave]);
}   
console.log("-------------------");
// 5. Laço "for...of" (para arrays)
console.log("Laço 'for...of':");
const frutas = ["Maçã", "Banana", "Laranja"];
for (let fruta of frutas) {
    console.log("Fruta:", fruta);
}   
console.log("-------------------");
// Fim dos exemplos de laços de repetição
console.log("Fim dos exemplos de laços de repetição.");

function fibonacci(n) {
  let a = 0;
  let b = 1;
  let resultado = [];

  for (let i = 0; i < n; i++) {
    resultado.push(a);
    let proximo = a + b;
    a = b;
    b = proximo;
  }

  return resultado;
}

console.log(fibonacci(10));
// Exemplo de uso da função Fibonacci
// para gerar os primeiros 10 números da sequência
// e exibi-los no console
// Saída esperada: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// Fibonacci usando while
function fibonacci(n) {
  let a = 0;
  let b = 1;
  let i = 0;

  while (i < n) {
    console.log(a);
    let proximo = a + b;
    a = b;
    b = proximo;
    i++;
  }
}

fibonacci(10);

// Fibonacc retornando apenas o valor da posição
function fibonacci(n) {
  let a = 0;
  let b = 1;

  for (let i = 2; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }

  return n === 0 ? 0 : b;
}

console.log(fibonacci(6)); // 8

// Finonacci usando função simples
function fibonacci(quantidade) {
  let a = 0;
  let b = 1;

  console.log(a);
  console.log(b);

  for (let i = 2; i < quantidade; i++) {
    let proximo = a + b;
    console.log(proximo);

    a = b;
    b = proximo;
  }
}

fibonacci(6);
// Saída esperada: 0, 1, 1, 2, 3, 5

// Fibonacci guardar em um array
function fibonacci(quantidade) {
  let a = 0;
  let b = 1;
  let sequencia = [a, b];
    for (let i = 2; i < quantidade; i++) {  
    let proximo = a + b;
    sequencia.push(proximo);
    a = b;
    b = proximo;
  }
    return sequencia;
}

console.log(fibonacci(6)); 
// Saída esperada: [0, 1, 1, 2, 3, 5]
// Fim do código de laços de repetição em JavaScript    

