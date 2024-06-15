const yup = require('yup')

const schema = yup.object().shape(
        {
        clienteNome: yup
        .string('O campo tem que ser texto'),
        FuncionarioNome: yup
        .string('O campo tem que ser texto'),
        carinho: yup
        .string('O campo tem que ser texto'),
        total: yup
        .number('O campo tem que ser um numero'),
        situaçãoStatus: yup
        .string('O campo tem que ser texto')
        
        }
)

function ValidarVenda(req, res, next){
    schema
    .validate(req.body, { abortEarly: false })
    .then(() => next())
    .catch(err => {

        const erros = err.inner.map(e => {
            const erro = {
                campo: e.path,
                erros: e.errors
            }
            return erro
        })

        res.status(404).json(
            {
                mensagem: "Falha na validação dos campos",
                erros
            }
        )

    })
}

module.exports = {
    ValidarVenda
}