const mongoose = require('./conexao'); // Importa a conexão do arquivo 'conexao.js'

// Define a estrutura do modelo Livro
const LivroSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  autor: String,
  anoPublicacao: Number,
  // Adicione outros campos conforme necessário para a sua aplicação
});

// Cria o modelo Livro com base no schema e associa à coleção "livros"
const Livro = mongoose.model('livros', LivroSchema);

module.exports = Livro; // Exporta o modelo Livro para ser usado em outros arquivos
