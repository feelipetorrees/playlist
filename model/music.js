// Campos que vamos cadastrar da musica

const mongoose = require('mongoose');



// Criamos o esquema do nosso banco de dados (Os campos que serão necessarios ser salvos do DB)
const musicSchema = new mongoose.Schema({
  name:{
      type: String,
      require: true,
  },
  author:{
      type: String,
      require: true,
},

  linkImage:{
    type: String,
    require: true,
},

  linkMusic:{
    type: String,
    require: true,
},


});

// Com o esquema do DB criado vamos agora, criar um model para esse DB
module.exports = mongoose.model("Music", musicSchema);

