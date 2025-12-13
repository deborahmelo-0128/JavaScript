function chamaPrimeiro (){
    console.log("Chama essa primeiro");
}

function chamaDepois (){
    console.log('entrou na segunda função');
    chamaPrimeiro();
    
}

function recebePrimeira(primeiraFuncao){
    console.log("Recebi a primeira função como parâmetro");
    primeiraFuncao();
}
recebePrimeira(chamaDepois);
