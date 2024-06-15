const express = require('express')
const app = express()
const PORT = 3001

const DataBase = require('./database/database')
DataBase()

app.use(express.json())



const router = require('./router/router')
app.use(router)

app.listen(PORT, () =>{
    console.log(`Aplicação rodando na porta ${PORT}`)
})