// Importanto a Model(Collection) do mongoose
import {User} from './connection'

// Exportando o método  para os arquivo serve.js recendo como parâmetro o express.
module.exports = function (app) {
    /* Conceito da callback
        o Req vem de Requerimento que é o envio de dados do usuário ou de um json manual direto para o método ou 
        requisição enviada

        o Res vem de Response que é a devolução de dados para o usuário, como uma strin, ou um json retornando valores ou querys
    */
    // Iniciando um método get retornando uma simples string de Hello World!
    app.get('/', (req,res) => {
        // Retornando uma string 
        return res.send('Hello World!')
    });

    app.get('/users', (req,res) => {
        /* Iniciando o uso da Model para buscar valores, como eu quero todos valores da base eu envio um find
        com parâmetros nulos!
        Uso CallBack com dois parâmetros padrões que é o err = erro e data = valor recebido
        */
        User.find({},(err,data) => {
            if(err)
                return res.status(500).send(err);
            
            return res.send(data);
        })
    });

    // Passando um parametro pela rota, neste caso o id do usuário que esta sendo visualizado
    app.get('/users/:id', (req,res) => {
        /*  Iniciando uso da model para buscar UM valor com o seguinte parâmetro passado, neste caso eu busco
        o ID que esta passando pela rota como o req.params.(id) -> váriavel passada no parâmetro da rota  */
        User.findOne({
            id: req.params.id
        },(err,data) => {
            if(err)
                return res.status(500).send(err);

            return res.send(data)
        })
    })

    // Enviando método POST para a Model
    app.post('/users', (req,res) => {
        /*  Criando um User pela model pelos dados recebidos na requisição que foi enviado por um formulário*/
        const user = User(req.body);
        // Até aqui ele ainda não foi  salvo na base, apenas após o user.save() que ele é armazenado
        user.save((err) => {
            if(err)
                return res.status(422).send(err)

            return res.send(user);
        })

    })
}