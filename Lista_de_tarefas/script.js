const login = document.getElementById("loginScreen");
const app = document.getElementById("appScreen");
const lista = document.getElementById("lista");
const filtro = document.getElementById("filtro");

let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

function entrar() {
  login.classList.add("hidden");
  app.classList.remove("hidden");
  renderizar();
}

function logout() {
  app.classList.add("hidden");
  login.classList.remove("hidden");
}

function adicionar() {
  const input = document.getElementById("novaTarefa");

  if (!input.value.trim()) return;

  tarefas.push({
    texto: input.value.trim(),
    status: false
  });

  input.value = "";
  salvar();
  renderizar();
}
function limpar() {
  const confirmar = confirm("Tem certeza que deseja apagar todas as tarefas?");     
    if (confirmar) {
        tarefas = [];
        salvar();
        renderizar();
    }
}

function renderizar() {
  lista.innerHTML = "";

  tarefas
    .filter(t => filtro.value === "finalizadas" ? t.status : true)
    .forEach((tarefa, index) => {
      const li = document.createElement("li");

      const span = document.createElement("span");
      span.textContent = tarefa.texto;
      if (tarefa.status) span.className = "concluida";

      const acoes = document.createElement("div");
      acoes.className = "acoes";

      const btnConcluir = document.createElement("button");
      btnConcluir.innerHTML = tarefa.status ? "↺" : "✔";
      btnConcluir.className = "acao-btn btn-concluir";
      btnConcluir.onclick = () => {
        tarefa.status = !tarefa.status;
        salvar();
        renderizar();
      };

      const btnEditar = document.createElement("button");
      btnEditar.innerHTML = "✎";
      btnEditar.className = "acao-btn btn-editar";
      btnEditar.onclick = () => editarTarefa(span, tarefa);

      const btnApagar = document.createElement("button");
      btnApagar.innerHTML = "🗑";
      btnApagar.className = "acao-btn btn-apagar";
      btnApagar.onclick = () => {
        if (confirm("Tem certeza que deseja apagar esta tarefa?")) {
          tarefas.splice(index, 1);
          salvar();
          renderizar();
        }
      };

      acoes.append(btnConcluir, btnEditar, btnApagar);
      li.append(span, acoes);
      lista.appendChild(li);
    });

  atualizarProgresso(); // ← MUITO IMPORTANTE
}

function editarTarefa(span, tarefa) {
  const input = document.createElement("input");
  input.type = "text";      
    input.value = tarefa.texto;
    span.replaceWith(input);
    input.focus();
    input.onblur = () => {
        if (input.value.trim()) {   
            tarefa.texto = input.value;
        }
        input.replaceWith(span);
        salvar();
        renderizar();
    }
}

function salvar() {
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}
filtro.onchange = renderizar;
renderizar();

function atualizarProgresso() {
  const total = tarefas.length;
  const concluidas = tarefas.filter(t => t.status).length;

  const contador = document.getElementById("contador");
  const barra = document.getElementById("barraProgresso");

  if (total === 0) {
    contador.textContent = "Nenhuma tarefa adicionada";
    barra.style.width = "0%";
    return;
  }

  const porcentagem = Math.round((concluidas / total) * 100);

  contador.textContent = `${concluidas} de ${total} concluídas (${porcentagem}%)`;
  barra.style.width = `${porcentagem}%`;
}
atualizarProgresso();
setInterval(atualizarProgresso, 500);

