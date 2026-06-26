// URL base do Web Service
const API_URL = "http://localhost:3000/api/pocoes";

// Função responsável por buscar e renderizar os produtos
async function carregarCatalogo() {
    const container = document.getElementById("catalogo-pocoes");

    try {
        // Realiza a requisição AJAX (GET) para o backend
        const resposta = await fetch(API_URL);
        
        if (!resposta.ok) throw new Error("Erro ao carregar os dados.");

        const pocoes = await resposta.json();

        // Limpa a mensagem de "Carregando..."
        container.innerHTML = "";

        // Se o estoque estiver vazio
        if (pocoes.length === 0) {
            container.innerHTML = "<p>Nenhuma poção disponível no momento.</p>";
            return;
        }

        // Itera sobre os dados e cria os cards HTML dinamicamente
        pocoes.forEach(pocao => {
            const card = document.createElement("div");
            card.className = "card-pocao";

            card.innerHTML = `
                <img src="${pocao.imagem}" alt="Imagem da ${pocao.nome}" onerror="this.src='assets/images/placeholder.jpg'">
                <h3>${pocao.nome}</h3>
                <p class="descricao">${pocao.descricao}</p>
                <p class="preco">${pocao.preco} moedas</p>
                <button type="button" onclick="alert('Funcionalidade de compra em desenvolvimento!')">Comprar</button>
            `;

            container.appendChild(card);
        });

    } catch (erro) {
        console.error("Erro:", erro);
        container.innerHTML = "<p>Erro ao carregar o catálogo de poções. Verifique se o servidor está rodando.</p>";
    }
}

// Executa a função assim que o HTML for completamente carregado
document.addEventListener("DOMContentLoaded", carregarCatalogo);