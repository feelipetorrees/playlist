// Nosso servidor


//Chamando a configuração do dontenv  para esse arquivo
require('dotenv').config()
const express = require('express')
const connectToDb = require('./database/db')
const path = require('path');
const Music = require('./model/music')




const app = express()
const port = process.env.PORT || 3000


app.set('view engine', 'ejs');

//arquivos estáticos 
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

//Receba dados de um formulario e enviar pro servidor 
app.use(express.urlencoded());

connectToDb();

// Primeiro parametro e a rota do servidor, 
app.get('/', async (req, res) => {
 
  const playlist = await Music.find();
  console.log(playlist);
  //Vai redenrizar a tela e mandar a playlist
  res.render('index', {playlist});
});

app.get("/admin", async (req, res) => {
  const playlist = await Music.find();
  res.render("admin", {playlist});
  
});



app.post("/create", async (req, res) => {
  const music = req.body;
  await Music.create(music);
  res.redirect("/");
})

app.listen(port, () => console.log(`Servidor rodando em http://localhost:3000/:${port}`)
)
