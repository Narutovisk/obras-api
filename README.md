# Sistema de Gerenciamento de Obras/Midias

Um simples gerenciador de obras como filmes, séries e desenhos,  usando Node.js, Express, Sequelize, Bcrypt, Json Web Token e MySQL.

## Setup

Tenha certeza de que tem [Node.js](https://nodejs.org/) e um Sistema Gerenciador de Banco de Dados como [SQL Server](https://www.microsoft.com/pt-br/sql-server/sql-server-downloads) ou [XAMPP](https://www.apachefriends.org/pt_br/index.html) instalados na sua maquina.

Para criar o banco de dados do sistema na sua maquina siga os comandos [aqui](database.md)
  
1. Clone o repositorio:

    ```bash
    git clone https://github.com/EricLuz7/projeto-nava.git
    ```

2. Navegue ate a pasta do projeto:

    ```bash
    cd projeto-nava
    ```

3. Instale as dependencias:

    ```bash
    npm init
    npm install express sequelize bcryptjs jsonwebtoken mysql2 body-parser axios
    ```

## Rodando o app

Use o seguinte comando no terminal para iniciar o app:

```bash
node app.js
```
Abra seu navegador e va para http://localhost:3000 para acessar o app.

# Dependencias 
[Express](https://expressjs.com/)
[Sequelize](https://sequelize.org/)
[Bcrypt](https://www.npmjs.com/package/bcrypt)
[JsonWebToken](https://www.npmjs.com/package/jsonwebtoken)
[MySQL2](https://www.npmjs.com/package/mysql2)

# License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT)

