// Importa o UserService
const UserService = require('../services/UserService')

// Classe UserController que gerencia as requisições HTTP
class UserController {
  // Método para inicializar o banco de dados
  static async initializeDatabase(req, res) {
    try {
      await UserService.initializeDatabase()
      res
        .status(200)
        .json({ message: 'Banco de dados inicializado com sucesso' })
    } catch (err) {
      res.status(500).json({
        message: 'Erro ao inicializar o banco de dados',
        error: err.message,
      })
    }
  }

  // Método para adicionar um novo usuário
  static async addUser(req, res) {
    const { name, email } = req.body

    console.log('controler', name, email)
    try {
      const user = await UserService.addUser(name, email)
      res.status(201).json({ message: 'Usuário adicionado com sucesso', user })
    } catch (err) {
      res
        .status(500)
        .json({ message: 'Erro ao adicionar usuário', error: err.message })
    }
  }

  // Método para obter todos os usuários
  static async getUsers(req, res) {
    try {
      const users = await UserService.getUsers() // Usa o serviço para obter todos os usuários
      res.status(200).json(users) // Retorna a lista de usuários como JSON
    } catch (err) {
      res
        .status(500)
        .json({ message: 'Erro ao obter usuários', error: err.message })
    }
  }
}

// Exporta a classe UserController
module.exports = UserController
