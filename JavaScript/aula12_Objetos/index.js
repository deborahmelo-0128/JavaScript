const meusDados = {
    nome: "Déborah",
    sobrenome: "Melo",
    idade: 28,  
    profissao: "Desenvolvedor Web",
    cidade: "Bom Despacho",
    casada: true
}
console.log(meusDados);

console.log("Nome:", meusDados.nome);
console.log("Sobrenome:", meusDados.sobrenome);
console.log("Idade:", meusDados.idade);
console.log("Profissão:", meusDados.profissao);
console.log("Cidade:", meusDados.cidade);
console.log("Casada:", meusDados.casada);

function retornaDadoPessoal(meusDados, dado) {
    return meusDados[dado];
}
console.log("Retornando dado pessoal:", retornaDadoPessoal("nome"));

meusDados.idade = 39;
meusDados.cidade = "Bom Despacho - MG";
console.log("Dados atualizados:", meusDados);



