// require('dotenv').config()
const express = require('express')

const app = express()
const port = process.env.PORT || 3001

// Importa o roteador de usuários
const userRoutes = require('./routes/userRoutes')

// Middleware para parsear JSON
app.use(express.json())

// Usa as rotas de usuários
app.use('/', userRoutes)

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})
