const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        nome:{
            type: String,
            required: true
        },
        precoUnitario:{
            type: Number,
            required: true
        },
        descricao:{
            type: String,
            required: false
        },
        estoque:{
            type: Number,
            required: true
        }
    },
    {timestamps: true}
)

const Produto = mongoose.model('produto', schema)

module.exports = Produto