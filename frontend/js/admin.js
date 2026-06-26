// URL base do Web Service
const API_URL = "http://localhost:3000/api/pocoes";

// Carrega as poções existentes no painel de administração
async function carregarEstoque() {
    const container = document.getElementById("lista-admin");

    try {
        const resposta = await fetch(API_URL);
        if (!resposta.ok) throw new Error("Erro ao carregar o estoque.");

        const pocoes = await resposta.json();
        container.innerHTML = "";

        if (pocoes.length === 0) {
            container.innerHTML = "<p>Nenhuma poção cadastrada no estoque.</p>";
            return;
        }

        pocoes.forEach(pocao => {
            const item = document.createElement("div");
            item.className = "item-admin";

            item.innerHTML = `
                <img src="${pocao.imagem}" alt="${pocao.nome}" onerror="this.src='assets/images/placeholder.jpg'">
                <div class="item-admin-info">
                    <h4>${pocao.nome}</h4>
                    <p>${pocao.preco} moedas</p>
                </div>
                <button type="button" class="btn-remover" onclick="removerPocao(${pocao.id})">Remover</button>
            `;

            container.appendChild(item);
        });
    } catch (erro) {
        console.error("Erro:", erro);
        container.innerHTML = "<p>Erro de conexão com o servidor.</p>";
    }
}

// Cadastra uma nova poção enviando os dados do formulário
document.getElementById("form-pocao").addEventListener("submit", async (evento) => {
    evento.preventDefault(); // Evita o recarregamento da página

    const novaPocao = {
        nome: document.getElementById("nome").value,
        descricao: document.getElementById("descricao").value,
        imagem: document.getElementById("imagem").value,
        preco: Number(document.getElementById("preco").value)
    };

    try {
        const resposta = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(novaPocao)
        });

        if (resposta.ok) {
            alert("Poção cadastrada com sucesso!");
            document.getElementById("form-pocao").reset(); // Limpa o formulário
            carregarEstoque(); // Atualiza a lista automaticamente
        } else {
            alert("Erro ao cadastrar a poção. Verifique os dados.");
        }
    } catch (erro) {
        console.error("Erro:", erro);
        alert("Erro de conexão ao tentar cadastrar.");
    }
});

// Remove uma poção do estoque
async function removerPocao(id) {
    if (!confirm("Tem certeza que deseja remover esta poção?")) return;

    try {
        const resposta = await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        });

        if (resposta.ok) {
            carregarEstoque(); // Atualiza a lista após a exclusão
        } else {
            alert("Erro ao remover a poção.");
        }
    } catch (erro) {
        console.error("Erro:", erro);
        alert("Erro de conexão ao tentar remover.");
    }
}

// Inicializa a listagem do estoque assim que a página carrega
document.addEventListener("DOMContentLoaded", carregarEstoque);