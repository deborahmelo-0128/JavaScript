console.log("Arquivo index.js está rodando!");

// Array que vai armazenar os livros do estoque
// Cada livro será um objeto com: titulo, autor e quantidade
let estoque = [];

// Função para adicionar um livro ao estoque
function adicionarLivro(titulo, autor, quantidade) {

  // Verifica se o livro já existe no estoque
  for (let i = 0; i < estoque.length; i++) {
    if (estoque[i].titulo === titulo) {
      console.log("⚠️ Livro já existe no estoque.");
      return;
    }
  }

  // Cria um novo objeto livro
  let novoLivro = {
    titulo: titulo,
    autor: autor,
    quantidade: quantidade
  };

  // Adiciona o livro ao array
  estoque.push(novoLivro);

  console.log("✅ Livro adicionado com sucesso!");
}

// Função para remover um livro do estoque pelo título
function removerLivro(titulo) {
  for (let i = 0; i < estoque.length; i++) {
    if (estoque[i].titulo === titulo) {
      estoque.splice(i, 1);
      console.log("🗑️ Livro removido com sucesso!");
      return;
    }
  }

  console.log("⚠️ Livro não encontrado no estoque.");
}

// Função para atualizar a quantidade de um livro
function atualizarQuantidade(titulo, novaQuantidade) {
  for (let i = 0; i < estoque.length; i++) {
    if (estoque[i].titulo === titulo) {
      estoque[i].quantidade = novaQuantidade;
      console.log("🔄 Quantidade atualizada com sucesso!");
      return;
    }
  }

  console.log("⚠️ Livro não encontrado no estoque.");
}
// Função para exibir todos os livros no estoque
function listarLivros() {
  if (estoque.length === 0) {
    console.log("📭 O estoque está vazio.");
    return;
  }

  console.log("📚 Livros disponíveis no estoque:");

  for (let i = 0; i < estoque.length; i++) {
    console.log(
      "Título: " + estoque[i].titulo +
      " | Autor: " + estoque[i].autor +
      " | Quantidade: " + estoque[i].quantidade
    );
  }
}
listarLivros(); // Mostra estoque vazio
console.log("Arquivo index.js está rodando!");

adicionarLivro("Dom Casmurro", "Machado de Assis", 5);
adicionarLivro("1984", "George Orwell", 10);

listarLivros();
atualizarQuantidade("1984", 15);
listarLivros(); 

