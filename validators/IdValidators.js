const mongoose = require('mongoose')

function validarID(req, res, next) {
    const valid = mongoose.Types.ObjectId.isValid(req.params.id)
    if(valid){
        next()
    }
    else{
        res.status(404).json({mensagem:"ID inválido"})
    }
}

module.exports = {
    validarID
}