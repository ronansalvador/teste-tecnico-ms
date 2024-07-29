// Importa o pool de conexões do arquivo connection.js
const pool = require('../config/connection')

// Classe UserModel que encapsula a lógica de banco de dados
class UserModel {
  // Função para criar a tabela `users`
  static async createUsersTable() {
    const query = `
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100)
      );
    `

    try {
      // Executa a consulta para criar a tabela
      await pool.query(query)
      console.log('Tabela `users` criada com sucesso')
    } catch (err) {
      console.error('Erro ao criar a tabela `users`', err)
      throw err // Lança o erro para ser capturado no serviço ou controlador
    }
  }

  // Função para inserir um novo usuário na tabela `users`
  static async insertUser(name, email) {
    const query = `
      INSERT INTO users (name, email)
      VALUES ($1, $2)
      RETURNING *;
    `

    try {
      // Executa a consulta de inserção
      const result = await pool.query(query, [name, email])
      console.log('Usuário inserido com sucesso:', result.rows[0])
      return result.rows[0] // Retorna o usuário inserido
    } catch (err) {
      console.error('Erro ao inserir usuário', err)
      throw err // Lança o erro para ser capturado no serviço ou controlador
    }
  }

  // Função para obter todos os usuários da tabela `users`
  static async getUsers() {
    const query = `
      SELECT * FROM users;
    `

    try {
      // Executa a consulta para buscar todos os usuários
      const result = await pool.query(query)
      console.log('Usuários encontrados:', result.rows)
      return result.rows // Retorna todos os usuários encontrados
    } catch (err) {
      console.error('Erro ao buscar usuários', err)
      throw err // Lança o erro para ser capturado no serviço ou controlador
    }
  }
}

// Exporta a classe UserModel
module.exports = UserModel
