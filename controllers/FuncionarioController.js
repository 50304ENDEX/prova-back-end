const funcionario = require('../models/FuncionarioModels')

async function getAll(req, res){
    res.json(await funcionario.find())
}

async function getID(req, res){
    const funcionarioId = await funcionario.findById(req.params.id)
    if(funcionarioId){
        res.json({mensagem: "funcionario:", funcionarioId })
    }
    res.status(404).json({mensagem: "funcionario não encontrado!"})
}
       
async function creat(req, res){
    const adicionar = new funcionario(req.body)
    const NewFuncionario = await adicionar.save()
    res.status(201).json({mensagem:"funcionario adicionado", NewFuncionario})
}

async function update(req, res){
    const funcionarioAlterado = await funcionario.findByIdAndUpdate(req.params.id, req.body, {new : true })
    if(funcionarioAlterado){
        res.json(funcionarioAlterado)
    }
    else{
        res.status(404).json({mensagem: "funcionario não encontrado!"})
    }
}

async function delet(req, res){
    const funcionarioDelet = await funcionario.findByIdAndDelete(req.params.id)
    if(funcionarioDelet){
        res.json(
            {
                mensagem:"funcionario deletado",
                funcionarioDelet
            }
        ) 
    }
    else{
        res.status(404).json({mensagem: "Funcionario não encontrado!"})
    }
}

module.exports = {
    getAll,
    getID,
    creat,
    update,
    delet
}