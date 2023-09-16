const mongoose = require('mongoose');

// Configuração das opções da conexão
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

// URL de conexão com o MongoDB (substitua com a URL do seu próprio banco)
const mongoURI = 'mongodb://localhost:27017/seu-banco-de-dados';

// Conecta ao MongoDB
mongoose.connect(mongoURI, options)
  .then(() => console.log('Conexão com o MongoDB estabelecida.'))
  .catch(err => console.error('Erro na conexão com o MongoDB:', err));

module.exports = mongoose; // Exporta o mongoose para ser usado em outros arquivos
