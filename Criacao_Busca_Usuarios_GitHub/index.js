const searchBtn = document.getElementById('searchBtn');
const usernameInput = document.getElementById('usernameInput');
const resultContainer = document.getElementById('resultContainer');

searchBtn.addEventListener('click', async () => {
    const query = usernameInput.value.trim();
    
    if (!query) {
        alert("Por favor, digite um nome.");
        return;
    }

    resultContainer.innerHTML = "Carregando...";

    try {
        const response = await fetch(`https://api.github.com/search/users?q=${query}`);
        const data = await response.json();

        // Limpa o container
        resultContainer.innerHTML = "";

        if (data.items && data.items.length > 0) {
            data.items.forEach(user => {
                const userCard = `
                    <div class="user-card">
                        <img src="${user.avatar_url}" alt="${user.login}">
                        <div>
                            <p><strong>${user.login}</strong></p>
                            <a href="${user.html_url}" target="_blank">Ver perfil</a>
                        </div>
                    </div>
                `;
                resultContainer.innerHTML += userCard;
            });
        } else {
            resultContainer.innerHTML = '<p class="error-msg">Não foram encontrados usuários para esta pesquisa</p>';
        }
    } catch (error) {
        resultContainer.innerHTML = '<p class="error-msg">Erro ao buscar dados. Tente novamente.</p>';
        console.error("Erro na API:", error);
    }
});