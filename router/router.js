const express = require('express')
const router = express.Router()

//Controllers
const ProdutoController = require('../controllers/ProdutoController')
const FuncionarioController = require('../controllers/FuncionarioController')
const ClienteController = require('../controllers/ClienteControllers')
const CarinhoControllers = require('../controllers/CarinhoControllers')

//validators
const {validarID} = require('../validators/IdValidators')
const {ValidarProduto} = require('../validators/ProdutoValidators')
const {ValidarFuncionario} = require('../validators/FuncionarioValidators')
const {ValidarCliente} = require('../validators/ClienteValidators')
const {ValidarCarinho} = require('../validators/CarinhoValidators')
const {ValidarVenda} = require('../validators/VendaValidators')

//rotasProdutos
router.get('/produto', ProdutoController.buscarTodos)
router.get('/produto/:id', validarID, ProdutoController.buscarID)
router.post('/produto', ValidarProduto, ProdutoController.criar)
router.put('/produto/:id', validarID, ValidarProduto, ProdutoController.update)

//rotasFuncionarios
router.get('/funcionario', FuncionarioController.getAll)
router.get('/funcionario/:id', validarID, FuncionarioController.getID)
router.post('/funcionario', ValidarFuncionario, FuncionarioController.creat)
router.put('/funcionario/:id', validarID, ValidarFuncionario, FuncionarioController.update)
router.delete('/funcionario/:id', validarID, FuncionarioController.delet)

//rotasCliente
router.get('/cliente', ClienteController.buscarTodos)
router.get('/cliente/:id', validarID, ClienteController.clienteID)
router.post('/cliente', ValidarCliente,ClienteController.clienteAdd)
router.put('/cliente/:id', validarID, ValidarCliente, ClienteController.clienteUpdate)
router.delete('/cliente/:id', validarID, ClienteController.clienteDelt)

//rotasCarinho
router.post('/carinho', ValidarCarinho, CarinhoControllers.criar)
router.get('/carinho', CarinhoControllers.buscarCarinho)

//rotasVendas


module.exports = router