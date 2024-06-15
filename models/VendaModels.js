const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        clienteNome:{
            type: mongoose.Types.ObjectId,
            required: true
        },
        FuncionarioNome:{
            type: mongoose.Types.ObjectId,
            ref: 'nome',
            required: true
        },
        carinho:{
            type: mongoose.Types.ObjectId,
            required:false
        },
        total:{
            type: Number,
            required: false
        },
        situaçãoStatus:{
            type: String,
            required: true
        }
    },
    {timestamps: true}
)

const Venda = mongoose.model('venda', schema)

module.exports = Venda
