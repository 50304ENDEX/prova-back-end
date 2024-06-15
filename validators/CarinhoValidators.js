const yup = require('yup')

const schema = yup.object().shape(
    {
        nome: yup
            .string("Campo precisa ser um texto")
            .required("Campo obrigatório"),
        quantidadeItem: yup
            .number("Campo precisa ser um numero")
            .required("Campo obrigatório"),
        precoUnitario: yup
            .string("Campo precisa ser um texto"),
        cliente: yup
            .string("Campo precisa ser um texto")
            .required("Campo obrigatório")
    }
)

function ValidarCarinho(req, res, next){
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
    ValidarCarinho
}
