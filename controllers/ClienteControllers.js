const cliente = require('../models/ClienteModels')

async function buscarTodos(req, res){
    res.json(await cliente.find()
    .populate(
        {
            path:'carinhos.carinho',
            select: 'nome'
        }
    )
)
}

async function clienteID(req, res){
    const Cliente = await cliente.findById(req.params.id)
    if(Cliente){
        res.json(Cliente)
    }
    else{
        res.status(404).json({mensagem:"Cliente não encontrado"})
    }
}

async function clienteAdd(req, res){
    const Cliente = new cliente(req.body)
    const NewCliente = await Cliente.save()
    res.status(201).json({mensagem: "cliente adicionado"})
}

async function clienteUpdate(req, res){
    const atualizar = await cliente.findByIdAndUpdate(req.params.id, req.body, {new: true})
    if(atualizar){
        res.json(
            {mensagem:"Cliente atualizado"}
        )
    }
    else{
        res.status(404).json({mensagem:"Cliente não encontrado"})
    }
}

async function clienteDelt(req, res){
    const clienteDelete = await cliente.findByIdAndDelete(req.params.id)
    if(clienteDelete){
        res.json(
            {mensagem:"Cliente excluido"}
        )
    }
    else{
        res.status(404).json({mensagem:"cliente não encontrado"})
    }
}

async function CarinhoCliente(req, res){
    res.json(await cliente.findById(req.params.id).populate(['carinho']))
}
 

module.exports = {
    buscarTodos,
    clienteAdd,
    clienteID,
    clienteUpdate,
    clienteDelt,
    CarinhoCliente
}

