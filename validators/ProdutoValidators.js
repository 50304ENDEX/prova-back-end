const yup = require('yup')

const schema = yup.object().shape(
    {
        nome: yup
            .string('O campo tem que ser um texto')
            .required("O campo é obrigatorio!"),
        precoUnitario: yup
            .number('O campo tem que ser um numero')
            .required('O preço unitario é obrigatorio'),
        descricao:yup
            .string('A descrição precisa ser um texto'),
        estoque: yup
            .number('Precisa ser um numero para')
            .required('O quantidade do estoque é obrigatoria')
    }
)

function ValidarProduto(req, res, next){
    schema
        .validate(req.body, {abortEarly: false })
        .then(()=> next())
        .catch(err => res.status(404).json(
            {
                mensagem:"Erro na validação dos campos",
                erro: err.erros
            }
        ))
}

module.exports = {
    ValidarProduto
}