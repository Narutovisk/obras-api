const express = require('express')
const connection = require('./database/database')
const app = express()
const bodyParser = require('body-parser')

app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', (req, res) => {
  res.render('index')
})

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Banco de dados
connection
   .authenticate()
   .then(() => {
    console.log("Conexão feita com sucesso!");
   });

// Models

const Usuario = require('./models/usuario')
const Categoria = require('./models/categoria')
const Genero = require('./models/genero')
const Obra = require('./models/obra')

// Rotas

const usuarioRoute = require('./routes/usuarioRoutes')
const generoRoute = require('./routes/generoRoutes')
const categoriaRoute = require('./routes/categoriaRoutes')
const obraRoute = require('./routes/obraRoutes')


   app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader (
      'Access-Control-Allow-Methods',
      'GET, POST, PATCH, PUT, DELETE, OPTIONS'
    );
    next();
  });

  app.use('/api/usuario', usuarioRoute)
  app.use('/api/generos', generoRoute);
  app.use('/api/categorias', categoriaRoute);
  app.use('/api/obras', obraRoute);

  app.listen(3000, ()=> {
    console.log("Servidor rodando na porta " + 3000);
  });


  module.exports = app;