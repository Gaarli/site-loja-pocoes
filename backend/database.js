import { Sequelize } from "sequelize";

// Cria conexão com o banco de dados SQLite em memória
// O armazenamento ":memory:" garante que os dados sejam voláteis e recriados ao iniciar o servidor
const sequelize = new Sequelize({
  dialect: "sqlite",  // Define o SGBD utilizado
  storage: ":memory:", // Banco executado diretamente na RAM
  logging: false,      // Desativa o log das queries SQL no terminal para manter a limpeza visual
});

export default sequelize;