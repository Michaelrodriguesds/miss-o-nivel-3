const mongoose = require('mongoose');


const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};


const mongoURI = 'mongodb://localhost:27017/seu-banco-de-dados';


mongoose.connect(mongoURI, options)
  .then(() => console.log('Conexão com o MongoDB estabelecida.'))
  .catch(err => console.error('Erro na conexão com o MongoDB:', err));

module.exports = mongoose; 
