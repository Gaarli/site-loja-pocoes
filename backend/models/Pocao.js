import { DataTypes } from "sequelize";
import sequelize from "../database.js";

// Define a estrutura da tabela 'Pocao' no banco de dados
const Pocao = sequelize.define("Pocao", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false // O campo é obrigatório
  },
  descricao: {
    type: DataTypes.TEXT, // TEXT é ideal para descrições mais longas
    allowNull: false
  },
  imagem: {
    type: DataTypes.STRING, // Armazena apenas a URL ou caminho do arquivo
    allowNull: false
  },
  preco: {
    type: DataTypes.INTEGER, // Trabalhando com inteiros para as 'moedas'
    allowNull: false
  }
});

export default Pocao;