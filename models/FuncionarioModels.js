const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        nome:{
            type: String,
            required: true
        },
        cpf:{
            type: String,
            required: true
        },
        telefone:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true
        },
        salario:{
            type: Number,
            required: true
        }
    },
    {timestamps: true}
)

const Funcionario = mongoose.model('funcionario', schema)

module.exports = Funcionario