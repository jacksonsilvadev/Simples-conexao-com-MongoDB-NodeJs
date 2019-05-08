// Package express, onde dispõem de middlewares, rotas para o controle do node.js
const express = require('express');
// Declarando o express como um app
const app = express();
// Chamando o pacote bodyParser para evitar problemas com envio de dados com formulário ou json
const bodyParser = require('body-parser');

// Ativando o body-parser no express com configurações
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

// Chamando arquivo de rota
const routes = require('./routes');
// Executando o método passando o app como parâmetro
routes(app);

// Executando o express na porta 3000 do local host
app.listen(3000, () => console.log('Server rodando na porta 3000'));