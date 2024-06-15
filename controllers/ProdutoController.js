const produto = require('../models/ProdutoModels')

async function buscarTodos(req, res){
    res.json(await produto.find())
}

async function buscarID(req, res){
    const ProdutoID = await produto.findById(req.params.id)
    if(ProdutoID){
        res.json(ProdutoID)
    }
    else{
        res.status(404).json({mensagem:"Produto não encontrado"})
    }
}

async function criar(req, res){
    const novoProduto = new produto(req.body)
    const ProdutoCriado = await novoProduto.save()
    res.status(201).json({mensagem:"Produto adicionado", ProdutoCriado})
}

async function update(req, res){
    const produtoAtualizado = await produto.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if(produtoAtualizado){
        res.json(produtoAtualizado)
    }
    else{
        res.status(404).json({mensagem:"Produto não encontrado"})
    }
}



module.exports = {
    buscarTodos,
    buscarID,
    update,
    criar
}
