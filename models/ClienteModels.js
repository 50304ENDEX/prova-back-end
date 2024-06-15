const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        nome:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true
        },
        cpf:{
            type: String,
            required: true
        },
        endereco: {
            cep: String,
            uf: String,
            localidade: String,
            bairro: String,
            logradouro: String,
            numero: String,
            complemento: String
        },
        carinhos:[{
            carinho: {
                type: mongoose.Types.ObjectId,
                ref: 'carinho',
                required: true
            }
    }]
    },
    {timestamps: true}
)

const Cliente = mongoose.model('cliente', schema)

module.exports = Cliente