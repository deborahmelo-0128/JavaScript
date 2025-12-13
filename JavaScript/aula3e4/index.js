let meuNome = 'Déborah';
const anoAtual = 2025;
const estaEstudando = true;
let qtddefilhos = 2;
let profissao = 'Desenvolvedora';
let idade = 39;

console.log('Meu nome é ' + meuNome + '.');
console.log('Estamos em ' + anoAtual + '.');
console.log('Estou estudando: ' + estaEstudando + '.');
console.log('Quantidade de filhos: ' + qtddefilhos + '.');
console.log('Profissão: ' + profissao + '.');
console.log('Idade: ' + idade + '.');
console.log("Funcionou corretamente!");

// Função comum
function exibeNome() {
    console.log('Meu nome é ' + meuNome + '.');
}
exibeNome();

// Arrow function simples
const minhaPrimeiraArrowFunction = () => {
    console.log('Executei arrow function:');
};

// Arrow function exibindo nome
const exibeNomeArrow = () => {
    let meuNome = 'Déborah';     // variável local da arrow function
    console.log('Meu nome é ' + meuNome + '.');  // <-- espaço corrigido
};

minhaPrimeiraArrowFunction();
exibeNomeArrow();
