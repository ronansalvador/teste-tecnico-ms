const { Pool } = require('pg')
require('dotenv').config()

// Cria uma pool de conexões com o PostgreSQL local
// const pool = new Pool({
//   host: process.env.PG_HOST, // Variável de ambiente para o host
//   user: process.env.PG_USER, // Variável de ambiente para o usuário
//   password: process.env.PG_PASSWORD, // Variável de ambiente para a senha
//   database: 'StoreManager', // Nome do banco de dados
//   port: process.env.PG_PORT || 5432, // Porta do PostgreSQL, default para 5432
//   max: 10, // Número máximo de conexões na pool
//   idleTimeoutMillis: 30000, // Tempo máximo de inatividade antes de fechar a conexão
//   connectionTimeoutMillis: 2000, // Tempo máximo de espera para uma conexão antes de dar timeout
// })

// Cria uma pool de conexões com o PostgreSQL usando uma URL de conexão
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Usa a variável de ambiente para a URL de conexão
  max: 10, // Número máximo de conexões na pool
  idleTimeoutMillis: 30000, // Tempo máximo de inatividade antes de fechar a conexão
  connectionTimeoutMillis: 2000, // Tempo máximo de espera para uma conexão antes de dar timeout
  ssl: {
    rejectUnauthorized: false, // Certifique-se de ajustar isto conforme necessário para SSL
  },
})

// Exporta o pool de conexões
module.exports = pool
