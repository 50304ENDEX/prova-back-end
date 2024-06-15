const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        nome:{
            type: mongoose.Types.ObjectId,
            ref:'produto',
            required: false
        },
        quantidadeItem:{
            type: Number,
            required: true
        },
        precoUnitario:{
            type: mongoose.Types.ObjectId,
            ref: 'produto',
            required: false
        },
        cliente:{
            type: mongoose.Types.ObjectId,
            ref: 'cliente',
            required: false
        }
    },
    {timestamps: true}
)

const Carinho = mongoose.model('carinho', schema)

module.exports = Carinho