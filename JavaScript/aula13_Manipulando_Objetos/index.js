const meusDados = {
    nome: "Déborah",
    sobrenome: "Melo",
    idade: 39,  
    profissao: "Desenvolvedor Web",
    cidade: "Bom Despacho",
    casada: true
};

// Verificando se o objeto possui determinado valor
function objetoPossuiValor(valorDaChave, objeto) {
    const valoresDoObjeto = Object.values(objeto);
    for (let i = 0; i < valoresDoObjeto.length; i++) {
        if (valoresDoObjeto[i] === valorDaChave) {      
            return true;
        }
    }
    return Object.values(objeto).includes(valorDaChave);    
}
console.log(objetoPossuiValor("Déborah", meusDados)); // true
console.log(objetoPossuiValor(35, meusDados)); // false 
console.log(objetoPossuiValor("Desenvolvedor Web", meusDados)); // true

// Retornando um array com todas as chaves do objeto
function retornaChavesObjeto(objeto) {
    return Object.keys(objeto);
}
console.log(retornaChavesObjeto(meusDados));
// [ 'nome', 'sobrenome', 'idade', 'profissao', 'cidade', 'casada' ]

// Retornando um array com todos os valores do objeto   
function retornaValoresObjeto(objeto) {
    return Object.values(objeto);
}
console.log(retornaValoresObjeto(meusDados));
// [ 'Déborah', 'Melo', 28, 'Desenvolvedor Web', 'Bom Despacho', true ]
// Retornando um array com todas as entradas [chave, valor] do objeto
function retornaEntradasObjeto(objeto) {
    return Object.entries(objeto);
}
console.log(retornaEntradasObjeto(meusDados));
// [ [ 'nome', 'Déborah' ],
//   [ 'sobrenome', 'Melo' ],
//   [ 'idade', 28 ],
//   [ 'profissao', 'Desenvolvedor Web' ],
//   [ 'cidade', 'Bom Despacho' ],
//   [ 'casada', true ] ]
// Congelando o objeto para que não possa ser modificado
Object.freeze(meusDados);
meusDados.idade = 39; // Não terá efeito
meusDados.cidade = "Bom Despacho - MG"; // Não terá efeito
console.log("Dados após tentativa de modificação:", meusDados);
// Dados após tentativa de modificação: { nome: 'Déborah',
//   sobrenome: 'Melo',
//   idade: 28, 
//   profissao: 'Desenvolvedor Web',
//   cidade: 'Bom Despacho',
//   casada: true }     
// Verificando se o objeto está congelado
const objetoCongelado = Object.isFrozen(meusDados);
console.log("O objeto está congelado?", objetoCongelado); // true   
// Criando uma cópia do objeto original e permitindo modificações na cópia
const copiaMeusDados = Object.assign({}, meusDados);
copiaMeusDados.idade = 39;  
copiaMeusDados.cidade = "Bom Despacho - MG";
console.log("Cópia dos dados modificados:", copiaMeusDados);
// Cópia dos dados modificados: { nome: 'Déborah',  
//   sobrenome: 'Melo',
//   idade: 39,
//   profissao: 'Desenvolvedor Web',
//   cidade: 'Bom Despacho - MG',
//   casada: true }     
console.log("Objeto original permanece inalterado:", meusDados);
// Objeto original permanece inalterado: { nome: 'Déborah',
//   sobrenome: 'Melo',
//   idade: 28,  
//   profissao: 'Desenvolvedor Web',
//   cidade: 'Bom Despacho',
//   casada: true } 

