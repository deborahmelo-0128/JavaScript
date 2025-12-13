const frutas = ['Maçã', 'Banana', 'Laranja', 'Uva'];

// Adiciona um elemento no final do array
frutas.push('Manga');
console.log(frutas); // ['Maçã', 'Banana', 'Laranja', 'Uva', 'Manga']
console.log(frutas [0]); // Maçã

// Remove o último elemento do array
const ultimaFruta = frutas.pop();
console.log(ultimaFruta); // Manga
console.log(frutas); // ['Maçã', 'Banana', 'Laranja', 'Uva']    

//Descobir o tamanho do array
console.log(frutas.length); // 4

// Acessar elementos do array
console.log(frutas[1]); // Banana
console.log(frutas[3]); // Uva
// Modificar elementos do array
frutas[2] = 'Abacaxi';
console.log(frutas); // ['Maçã', 'Banana', 'Abacaxi', 'Uva']

// Iterar sobre os elementos do array
frutas.forEach((fruta, indice) => {
    console.log(`${indice}: ${fruta}`);
});
// 0: Maçã
// 1: Banana
// 2: Abacaxi
// 3: Uva
// Encontrar o índice de um elemento
const indiceUva = frutas.indexOf('Uva');
console.log(indiceUva); // 3

// Verificar se um elemento existe no array
const existeLaranja = frutas.includes('Laranja');
console.log(existeLaranja); // false
const existeBanana = frutas.includes('Banana');
console.log(existeBanana); // true
// Remover um elemento específico do array
const indiceBanana = frutas.indexOf('Banana');
if (indiceBanana !== -1) {
    frutas.splice(indiceBanana, 1);
}
console.log(frutas); // ['Maçã', 'Abacaxi', 'Uva']

// Adicionar um elemento no início do array
frutas.unshift('Morango');
console.log(frutas); // ['Morango', 'Maçã', 'Abacaxi', 'Uva']   


