// chamando o package que faz conexão com o MongoDB
const mongoose = require('mongoose');
// Chamando a conexão com o banco de dados local do MongoDB aonde por padrão ele vem com a URL
// mongodb://localhost:27017/(Nome da base de dados)
// E o useNewUrlParser é para não receber erro de que esta depraciado a conexão
mongoose.connect('mongodb://localhost:27017/node_vue', {useNewUrlParser: true});

// Fazendo a conexão no banco de dados
const db = mongoose.connection;

// Retornando um evento para caso a conexão for um sucesso
db.on('open', ()=> {
    console.log('Estamos conectados');
})

// Criando uma model(Collection), da tabela User
export const User = mongoose.model('User', {
    name: {
        type: String,
        required: true
    },
    email: String
})

export const mongoose = mongoose