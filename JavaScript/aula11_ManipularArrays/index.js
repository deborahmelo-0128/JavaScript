const cores = ['Vermelho', 'Verde', 'Azul', 'Amarelo'];
console.log('Array original:', cores);
console.log('Tamanho do array:', cores.length);

// Adiciona um elemento no final do array
cores.push('Roxo');
console.log('Após push:', cores);

// Remove o último elemento do array
const ultimaCor = cores.pop();
console.log('Cor removida com pop:', ultimaCor);
console.log('Após pop:', cores);

// Acessar e modificar elementos do array
console.log('Elemento no índice 1:', cores[1]);
cores[2] = 'Ciano';
console.log('Após modificação:', cores);

// Iterar sobre os elementos do array
console.log('Iterando sobre o array:');
cores.forEach((cor, indice) => {
    console.log(`${indice}: ${cor}`);
});


// Encontrar o índice de um elemento
const indiceAmarelo = cores.indexOf('Amarelo');
console.log('Índice de Amarelo:', indiceAmarelo);   

// Verificar se um elemento existe no array
const existeVerde = cores.includes('Verde');
console.log('Existe Verde no array?', existeVerde); 
const existePreto = cores.includes('Preto');
console.log('Existe Preto no array?', existePreto);
// Remover um elemento específico do array
const indiceVerde = cores.indexOf('Verde');
if (indiceVerde !== -1) {
    cores.splice(indiceVerde, 1);
}
console.log('Após remover Verde:', cores);
// Adicionar um elemento no início do array
cores.unshift('Laranja');
console.log('Após unshift:', cores);






