const inputNome = document.getElementById("nome");
const btnCurtir = document.getElementById("btnCurtir");
const btnLimpar = document.getElementById("btnLimpar");
const resultado = document.getElementById("resultado");

// Recupera do localStorage ou cria array vazio
let curtidas = JSON.parse(localStorage.getItem("curtidas")) || [];

// Atualiza o texto ao carregar a página
atualizarTexto();

btnCurtir.addEventListener("click", curtir);
btnLimpar.addEventListener("click", limparCurtidas);

function curtir() {
  const nome = inputNome.value.trim();

  if (nome === "") return;

  // Evita duplicados
  if (!curtidas.includes(nome)) {
    curtidas.push(nome);
    localStorage.setItem("curtidas", JSON.stringify(curtidas));
  }

  atualizarTexto();
  inputNome.value = "";
}

function limparCurtidas() {
  curtidas = [];
  localStorage.removeItem("curtidas");
  atualizarTexto();
}

function atualizarTexto() {
  const total = curtidas.length;

  if (total === 0) {
    resultado.textContent = "Ninguém curtiu";
  } 
  else if (total === 1) {
    resultado.textContent = `${curtidas[0]} curtiu`;
  } 
  else if (total === 2) {
    resultado.textContent = `${curtidas[0]} e ${curtidas[1]} curtiram`;
  } 
  else {
    resultado.textContent = `${curtidas[0]}, ${curtidas[1]} e mais ${total - 2} pessoas curtiram`;
  }
}
