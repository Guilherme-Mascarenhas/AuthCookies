<h1 align = 'center'>
	AuthCookies - BackEnd
</h1>

## Sobre o projeto

Essa parte do projeto é responsável pela criação da API que serve como backend, intermediando a comunicação entre o frontend e os dados armazenados. A API aplica as regras de negócios e realiza consultas através de rotas públicas e privadas. Utiliza middleware para verificar o token necessário nas rotas privadas. Além disso, é essa parte do projeto que gera e valida o token de acesso para certas requisições, fornecendo-o ao frontend para proteger as rotas entre as páginas.

---

## Tecnologias

As seguintes ferramentas foram usadas na construção dessa parte do projeto:

NodeJS
Bibliotecas
-   **Express (Cosntrução da API)**
-   **Bcryptjs (Criptografar a senha)** 
-   **Cors (CORS da API)**
-   **Dotenv (Variaveis de ambiente)**
-   **Jsonwebtoken (Geração do token)**
-   **Mysql (Conexão com o banco)**
-   **Uuid (Hash de ID)**
-   **Validator (Validar dados)**

---

## Como executar o projeto

### Pre-requisitos

Antes de começar, voce vai precisar ter instalado em sua maquina as seguintes ferramentas:

Nodejs
Editor de codigo (VsCode)
Git
MySQL

### Rodando a Aplicacao

Apos instalado o NodeJs e glonado esse repositorio
0. Abrir essa pasta AuthCookies-BackEnd em seu editor de codigo.
1. Iniciar um novo terminal.
2. No terminal, executar **npm install**
3. Acessar **src/DB/test_db.sql** e execute essa query em seu banco MySql para a criação do banco de dados de exemplo.
4. Na raiz do projeto crie o arquivo **.env** e copie os campo que estão no **exemple.env**
5. Inserir os dados para acesso ao seu banco de dados.
4. Acesse o arquivo em **src/config/auth.json** e insira na "secret", seu hash(sequencia aleatoria), para a construção do token.
5. Apos essa preve configuração no terminal na raiz do projeto executar **npm start** para iniciar o servidor e espere ele conectar ao banco de dados.
6. Apos estar em execução, ir para a parte do FrontEnd dessa Aplicação.


