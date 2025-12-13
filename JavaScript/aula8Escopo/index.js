const todoMundoVe = "Todo mundo vê esta variavel de escopo global";

function executaEscopoGlobal() {
    console.log (todoMundoVe);
    
}

function executaEscopoLocal() {
    const soVeAqui = "Só quem está dentro do bloco da função vê esta variável";
    console.log(soVeAqui);
}
executaEscopoGlobal();
executaEscopoLocal();
//console.log(soVeAqui); // Erro! A variável soVeAqui não está definida neste escopo.
// Variável soVeAqui não pode ser acessada aqui fora da função
//console.log(todoMundoVe); // Funciona normalmente, pois é uma variável global

function escopoDeBloco() {
    if (true) {
        const escopoIf = "Variável declarada com 'const' dentro de um bloco if";
        console.log(escopoIf);
    }
    //console.log(escopoIf); // Erro! A variável escopoIf não está definida neste escopo.
    // Variável escopoIf não pode ser acessada aqui fora do bloco if
}
escopoDeBloco();
function escopoDeLoop() {
    for (let i = 0; i < 3; i++) {
        const escopoLoop = `Variável declarada com 'const' dentro de um loop, iteração ${i}`;
        console.log(escopoLoop);
    }
    //console.log(escopoLoop); // Erro! A variável escopoLoop não está definida neste escopo.
    // Variável escopoLoop não pode ser acessada aqui fora do loop
}
escopoDeLoop();





