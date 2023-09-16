const Livro = require('./livro-schema'); // Importa o modelo Livro

// Função assíncrona para obter todos os livros
const obterLivros = async () => {
  try {
    // Utiliza o método find do modelo Livro para buscar todos os livros na coleção
    const livros = await Livro.find();
    return livros; // Retorna o conjunto de livros encontrados
  } catch (error) {
    throw new Error(`Erro ao buscar livros: ${error.message}`);
  }
};

// Função assíncrona para incluir um livro no banco de dados
const incluir = async (livro) => {
  try {
    // Utiliza o método create do modelo Livro para adicionar um novo livro
    const novoLivro = await Livro.create(livro);
    return novoLivro; // Retorna o livro recém-incluído
  } catch (error) {
    throw new Error(`Erro ao incluir livro: ${error.message}`);
  }
};

// Função assíncrona para excluir um livro do banco de dados com base no código (_id)
const excluir = async (codigo) => {
  try {
    // Utiliza o método deleteOne do modelo Livro para excluir um livro por _id
    const resultado = await Livro.deleteOne({ _id: codigo });
    return resultado; // Retorna o resultado da exclusão
  } catch (error) {
    throw new Error(`Erro ao excluir livro: ${error.message}`);
  }
};

module.exports = {
  obterLivros, // Exporta a função obterLivros
  incluir, // Exporta a função incluir
  excluir, // Exporta a função excluir
};
