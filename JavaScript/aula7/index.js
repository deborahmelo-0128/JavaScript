function retornaNumero() {
    return 42;
}

retornaNumero();
console.log(retornaNumero());

function executaELoga(funcao) {
    const resultado = funcao();
    console.log("O resultado da função é:", resultado);
}   
executaELoga(retornaNumero);

