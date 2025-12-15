const inputNome = document.getElementById("nome");
const botaoCurtir = document.getElementById("btnCurtir");
const resultado = document.getElementById("resultado");

const curtidas = [];

botaoCurtir.addEventListener("click", curtir);

function curtir() {
  const nome = inputNome.value.trim();

  if (nome === "") return;

  if (!curtidas.includes(nome)) {
    curtidas.push(nome);
  }

  atualizarTexto();
  inputNome.value = "";
}

function atualizarTexto() {
  const total = curtidas.length;

  if (total === 0) {
    resultado.textContent = "Ninguém curtiu";
  } else if (total === 1) {
    resultado.textContent = `${curtidas[0]} curtiu`;
  } else if (total === 2) {
    resultado.textContent = `${curtidas[0]} e ${curtidas[1]} curtiram`;
  } else {
    resultado.textContent = `${curtidas[0]}, ${curtidas[1]} e mais ${total - 2} pessoas curtiram`;
  }
}
