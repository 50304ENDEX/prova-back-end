const yup = require('yup')

const schema = yup.object().shape(
    {
        nome: yup
            .string('O campo tem que ser um texto')
            .required("O campo é obrigatorio!"),
        cpf: yup
            .string('O campo tem que ser um texto')
            .required("O campo é obrigatorio!"),
        telefone: yup
            .string('O campo tem que ser um texto')
            .required("O campo é obrigatorio!"),
        email: yup
            .string('O campo tem que ser um texto')
            .required("O campo é obrigatorio!"),
        salario: yup
            .number('O campo tem que ser um numero!')
            .min(1430, 'Existe um valor minimo de 1430')
            .required("O campo é obrigatorio!")
    }
)

function ValidarFuncionario(req, res, next){
    schema
        .validate(req.body , {abortEarly: false })
        .then(() => next())
        .catch(err => res.status(404).json(
            {
                mensagem:"Erro na validação dos campos",
                erro: err.errors
            }
        ))
}

module.exports = {
    ValidarFuncionario
}