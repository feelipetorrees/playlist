// Nosso servidor


//Chamando a configuração do dontenv  para esse arquivo
require('dotenv').config()

const express = require('express')
const connectToDb = require('./database/db')

const app = express()
const port = process.env.PORT || 3000

connectToDb();
// Primeiro parametro e a rota do servidor, 
app.get('/hello', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => console.log(`Servidor rodando em http://localhost:3000/:${port}`)
)
