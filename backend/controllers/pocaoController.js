import Pocao from "../models/Pocao.js";

// Lista todas as poções para a loja
export const listarPocoes = async (req, res) => {
  try {
    const pocoes = await Pocao.findAll();
    res.status(200).json(pocoes);
  } catch (erro) {
    res.status(500).json({ erro: "Erro ao buscar poções." });
  }
};

// Cadastra uma nova poção via painel de administração
export const cadastrarPocao = async (req, res) => {
  try {
    const { nome, descricao, imagem, preco } = req.body;
    const novaPocao = await Pocao.create({ nome, descricao, imagem, preco });
    res.status(201).json(novaPocao);
  } catch (erro) {
    res.status(400).json({ erro: "Erro ao cadastrar poção. Verifique os dados." });
  }
};

// Remove uma poção do estoque pelo ID
export const removerPocao = async (req, res) => {
  try {
    const { id } = req.params;
    const deletado = await Pocao.destroy({ where: { id } });
    if (deletado) {
      res.status(200).json({ mensagem: "Poção removida com sucesso." });
    } else {
      res.status(404).json({ erro: "Poção não encontrada." });
    }
  } catch (erro) {
    res.status(500).json({ erro: "Erro ao remover poção." });
  }
};

// Popula o banco de dados em memória com os dados iniciais do trabalho
export const popularBanco = async () => {
  const count = await Pocao.count();
  if (count === 0) {
    await Pocao.bulkCreate([
      {
        nome: "Poção Blue Sky",
        descricao: "Essa poção provê um surto de inspiração por 24 horas. Foi utilizada por John Lennon quando escreveu Lucy in the Sky with Diamonds.",
        imagem: "assets/images/blue-sky.jpg",
        preco: 300
      },
      {
        nome: "Poção do Perfume Misterioso",
        descricao: "Essa poção faz com que você fique cheirando lilás e groselha por 24 dias. Essência muito admirada pelos bruxos.",
        imagem: "assets/images/perfume.jpg",
        preco: 200
      },
      {
        nome: "Poção de Pinus",
        descricao: "Essa poção faz com que você fique 10 cm mais alto! Observação: efeitos colaterais desconhecidos.",
        imagem: "assets/images/pinus.jpg",
        preco: 3000
      },
      {
        nome: "Poção da Beleza Eterna",
        descricao: "Veneno que mata rápido.",
        imagem: "assets/images/beleza.jpg",
        preco: 100
      },
      {
        nome: "Poção do Arco íro",
        descricao: "Traz felicidade momentânea. Pode durar de 10 minutos a 2 dias.",
        imagem: "assets/images/arco-iro.jpg",
        preco: 120
      },
      {
        nome: "Caldeirão das Verdades Secretas",
        descricao: "As pessoas lhe dirão apenas verdades por 1 hora. É necessário beber os 5L.",
        imagem: "assets/images/verdades.jpg",
        preco: 150
      }
    ]);
  }
};