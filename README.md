## 🚀 Estrutura do Projeto

O projeto está dividido de forma modular entre Backend (Web Service RESTful) e Frontend (Interface do Usuário):


```

```text
projeto-pocoes/
├── backend/
│   ├── controllers/
│   │   └── pocaoController.js # Lógica de negócio (Listar, Cadastrar, Remover e Carga Inicial)
│   ├── models/
│   │   └── Pocao.js           # Definição do modelo de dados usando Sequelize
│   ├── database.js            # Configuração da conexão SQLite em modo memória
│   ├── package.json           # Dependências e scripts do ecossistema Node.js
│   └── server.js              # Inicialização do servidor Express e mapeamento de rotas
└── frontend/
    ├── css/
    │   └── style.css          # Identidade visual (Paleta escura, fonte Gill Sans)
    ├── js/
    │   ├── admin.js           # Lógica AJAX/Fetch para o painel administrativo
    │   └── main.js            # Lógica AJAX/Fetch para o catálogo do comprador
    ├── admin.html             # Interface do painel de administração
    └── index.html             # Interface da loja do comprador (História desde 1867)

```

---

## 🛠️ Pré-requisitos

Antes de iniciar, certifique-se de ter instalado em sua máquina:

* **Node.js** (Versão 18 ou superior recomendada)
* Um navegador web moderno (Chrome, Firefox, Edge, etc.)

---

## ⚙️ Configuração e Instalação

1. Abra o terminal e navegue até o diretório do backend:
```bash
cd backend

```


2. Instale todas as dependências necessárias listadas no `package.json` (Express, Sequelize, SQLite3 e CORS):
```bash
npm install

```



---

## 🏃‍♂️ Execução do projeto

### 1. Iniciando o Web Service (Backend)

Ainda dentro da pasta `backend`, execute o comando abaixo para iniciar o servidor:

```bash
npm start

```

O terminal deverá exibir a seguinte mensagem de confirmação:

```text
Web Service rodando em http://localhost:3000

```

> **Nota sobre o Banco de Dados:** Conforme os requisitos obrigatórios, o sistema utiliza o **SQLite em modo memória (`:memory:`)**. Isso significa que o banco é criado inteiramente na RAM ao iniciar o servidor e é automaticamente populado com as 6 poções de exemplo exigidas pelo roteiro. Caso o servidor seja reiniciado, o banco retornará ao estado inicial limpo/resetado.

### 2. Acessando a Interface (Frontend)

Com o servidor rodando em segundo plano:

1. Navegue até a pasta `frontend/`.
2. Dê um duplo clique no arquivo `index.html` para abri-lo diretamente no navegador de sua preferência.
3. Para alternar entre a visão do comprador e o painel de controle, utilize os links de navegação presentes no cabeçalho de cada página.

---

## Documentação da API (Web Service)

O backend expõe as seguintes rotas na URL base `http://localhost:3000`:

| Método | Rota | Descrição | Corpo da Requisição (JSON) / Parâmetros |
| --- | --- | --- | --- |
| **GET** | `/api/pocoes` | Retorna todas as poções cadastradas no banco de dados. | Nenhum |
| **POST** | `/api/pocoes` | Cadastra uma nova poção no estoque. | `{"nome": "string", "descricao": "string", "imagem": "string", "preco": number}` |
| **DELETE** | `/api/pocoes/:id` | Remove uma poção específica baseada no ID informado. | `id` enviado como parâmetro na URL |

---

## Especificações de Design e Requisitos Atendidos

* **Tipografia:** Uso estrito da fonte clássica e sóbria **Gill Sans** (com fallbacks adequados no CSS).
* **Identidade Visual:** Paleta de cores inteiramente escura, adequada à atmosfera mística da loja de poções.
* **Histórico da Loja:** Seção descritiva na página principal informando a fundação em **1867** e referenciando a proprietária.
* **Dinamismo (AJAX):** Listagem, inserção e remoção feitas de forma assíncrona com JavaScript vanilla (Fetch API), eliminando a necessidade de recarregar as páginas.
* **Estrutura de Dados:** Cada poção contém rigorosamente os campos `nome`, `imagem` (caminho/URL), `descricao` e `preco`.
"""
```