import express from "express";
import cors from "cors";
import sequelize from "./database.js";
import { listarPocoes, cadastrarPocao, removerPocao, popularBanco } from "./controllers/pocaoController.js";

const app = express();
const PORT = 3000;

// Middlewares essenciais
app.use(cors()); // Permite requisições do frontend (HTML/JS) para esta API
app.use(express.json()); // Habilita o parseamento de JSON no corpo das requisições (req.body)

// Rotas do Web Service
app.get("/api/pocoes", listarPocoes);          // Lista os produtos (para as duas páginas)
app.post("/api/pocoes", cadastrarPocao);       // Cadastra novo produto (página admin)
app.delete("/api/pocoes/:id", removerPocao);   // Remove produto (página admin)

// Inicialização do Banco e do Servidor
const iniciarServidor = async () => {
  try {
    // Sincroniza os modelos com o banco em memória (force: true recria as tabelas sempre)
    await sequelize.sync({ force: true });
    
    // Insere os dados iniciais exigidos pelo roteiro
    await popularBanco();
    
    // Inicia o Web Service
    app.listen(PORT, () => {
      console.log(`Web Service rodando em http://localhost:${PORT}`);
    });
  } catch (erro) {
    console.error("Erro ao iniciar o servidor:", erro);
  }
};

iniciarServidor();