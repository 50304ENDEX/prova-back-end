const yup = require('yup')

const schema = yup.object().shape(
    {
        nome: yup
            .string('O campo tem que ser um texto')
            .required("O campo é obrigatorio!"),
        email: yup
            .string('O campo nome precisa ser um texto!')
            .email('O email é invalido!')
            .required('O campo é obrigatorio!'),
        cpf: yup
            .string('O campo nome precisa ser um texto!')
            .required('O campo é obrigatorio!'),
    }
)

function ValidarCliente(req, res, next){
    schema
        .validate(req.body, {abortEarly: false})
        .then(() => next())
        .catch(err =>{
            const erros = err.inner.map(e =>{

                const erro = {
                    campo: e.path,
                    erros: e.erros
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
    ValidarCliente
}