
## 1. Instalação node Linux (Ubuntu/Debian):

## Atualize o gerenciador de pacotes:
```bash
sudo apt update
```

## Instale o Node.js e o npm:
```bash
sudo apt install nodejs npm
```


## Express

Crie um novo diretório para o projeto e navegue até ele:
```bash
mkdir meu-projeto
cd meu-projeto
```

Inicialize um novo projeto Node.js:
```bash
npm init -y
```

Instale o Express.js:
```bash
npm install express
```

### Escreva um código que cria uma rota GET em Express.js que responde com um
JSON `{ message: "Hello from Express" }`.


```js
// index.js
const express = require('express')

const app = express()

app.listen(3001, () => console.log('rodando na porta 3001'))

app.get('/', async (req, res) => {
  res.send({ message: 'Hello from Express' })
})
```
## Quais passos você seguiria para instalar o PostgreSQL em sua máquina?
Para Linux (Ubuntu/Debian):

Atualize o gerenciador de pacotes:
```bash
sudo apt update
```
Instale o PostgreSQL:
```bash
sudo apt install postgresql postgresql-contrib
```

## Explique como você se conectaria a um banco de dados PostgreSQL usando o Node.js. Utilize o pacote pg para criar uma conexão simples.

Instale o pacote pg:

```bash
npm install pg
```

Conecte-se ao banco de dados usando o código abaixo:

```js
const { Pool } = require('pg')

// Cria uma pool de conexões com o PostgreSQL local
const pool = new Pool({
  host: process.env.PG_HOST, // Variável de ambiente para o host
  user: process.env.PG_USER, // Variável de ambiente para o usuário
  password: process.env.PG_PASSWORD, // Variável de ambiente para a senha
  database: 'StoreManager', // Nome do banco de dados
  port: process.env.PG_PORT || 5432, // Porta do PostgreSQL, default para 5432
  max: 10, // Número máximo de conexões na pool
  idleTimeoutMillis: 30000, // Tempo máximo de inatividade antes de fechar a conexão
  connectionTimeoutMillis: 2000, // Tempo máximo de espera para uma conexão antes de dar timeout
})

```

## rodando o projeto

Clone o projeto

```
git clone git@github.com:ronansalvador/teste-tecnico-ms.git
```

Acessa a pasta do projeto

```
cd teste-tecnico-ms
```

instala as dependencias

```
npm install
```

Configure a aplicação com os seus dados locais do banco de dados ou inisra o url do banco de dados

```js

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

```

caso for utilizar a conexao por url adicione a url o arquivo `.env`

```
DATABASE_URL=ADICIONE_AQUI_SUA_URL
```

Para iniciar a aplicação Utilize

```
npm run start
```



## Executando as rotas

Criar as tabelas e testar conexão com o bando de dados

http://localhost:3001/init-db

Post -  adicionar usuario

http://localhost:3001/adduser

no body da requisição utiize o segunte modelo:
```json
{
  "name": "Ronan",
  "email": "ronan@email.com"
}
```


Get - Listar dados de todos os usuarios

http://localhost:3001/getusers