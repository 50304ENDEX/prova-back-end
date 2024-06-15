const carinho = require('../models/CarinhoModels')

async function buscarCarinho(req, res){
    res.json(await carinho.find())
}

async function criar(req, res){
    const NovoItem = new carinho(req.body)
    const ItemColocado = NovoItem.save()
    res.status(201).json({mensagem: "Novo Item adicionado"})
}

module.exports ={
    criar,
    buscarCarinho
}