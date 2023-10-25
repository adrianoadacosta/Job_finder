# Job_finder Projeto Node.js com Express, Sequelize, SQLite e Handlebars

Este é um projeto de exemplo que utiliza Node.js com Express para criar um servidor web, Sequelize como ORM para interagir com um banco de dados SQLite e Handlebars como mecanismo de template para gerar páginas HTML dinamicamente.

## Pré-requisitos
Antes de começar, você precisa ter o Node.js e o npm (gerenciador de pacotes do Node.js) instalados em seu sistema. Você pode baixá-los e instalá-los a partir do [site oficial do Node.js](https://nodejs.org/en/download).

## Como Baixar e Executar o Projeto
1. Clone o Repositório: `git clone git@github.com:adrianoadacosta/Job_finder.git`

2. Acesse o Diretório do Projeto: `cd nome-do-repositorio`

3. Instale as Dependências: `npm install`

4. Configure as Variáveis de Ambiente: 
Crie um arquivo .env na raiz do projeto e configure as variáveis de ambiente necessárias, como as credenciais do banco de dados.

 Exemplo de .env:
 ```
 PORT=3000
 DB_NAME=mydatabase
 DB_USER=myuser
 DB_PASS=mypassword
 ```

5. Execute o Aplicativo:
`npm rum dev`

O aplicativo estará disponível em http://localhost:3000.

## Estrutura do Projeto
* app.js: O arquivo principal do aplicativo que configura o servidor Express.
* routes/: Pasta contendo os arquivos de rotas da aplicação.
* models/: Pasta para armazenar os modelos Sequelize para interagir com o banco de dados.
* views/: Pasta para armazenar os arquivos de template Handlebars.
* public/: Pasta para arquivos estáticos como CSS, JavaScript, imagens, etc.

##Contribuindo
Sinta-se à vontade para contribuir com melhorias para este projeto. Abra uma issue ou envie um pull request.

## Agradecimento

Professor Matheus Battisti (horadecodar)

https://horadecodar.com.br/cursos-horadecodar



