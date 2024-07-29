// Importa o UserModel
const UserModel = require('../models/UserModel')

// Classe UserService que encapsula a lógica de negócio
class UserService {
  // Função para inicializar o banco de dados
  static async initializeDatabase() {
    try {
      await UserModel.createUsersTable() // Cria a tabela `users`
    } catch (err) {
      console.error('Erro ao inicializar o banco de dados', err)
      throw err // Lança o erro para ser capturado no controlador
    }
  }

  // Função para adicionar um novo usuário
  static async addUser(name, email) {
    try {
      const user = await UserModel.insertUser(name, email) // Insere um usuário
      return user
    } catch (err) {
      console.error('Erro ao adicionar usuário', err)
      throw err // Lança o erro para ser capturado no controlador
    }
  }

  // Função para obter todos os usuários
  static async getUsers() {
    try {
      const users = await UserModel.getUsers() // Usa o modelo para buscar todos os usuários
      return users // Retorna a lista de usuários
    } catch (err) {
      console.error('Erro ao obter usuários', err)
      throw err // Lança o erro para ser capturado no controlador
    }
  }
}

// Exporta a classe UserService
module.exports = UserService
