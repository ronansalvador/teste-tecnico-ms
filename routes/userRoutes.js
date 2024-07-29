// Importa o Router do Express
const express = require('express')
const router = express.Router()

// Importa o UserController
const UserController = require('../controllers/UserController')

// Define a rota para inicializar o banco de dados
router.get('/init-db', UserController.initializeDatabase)

// Define a rota para buscar os dados dos usuarios no banco de dados.
router.get('/getusers', UserController.getUsers)

// Define a rota para adicionar um novo usuário
router.post('/adduser', UserController.addUser)

// Exporta o roteador
module.exports = router
