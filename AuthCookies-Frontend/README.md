<h1 align = 'center'>
	AuthCookies - FrontEnd
</h1>

## Sobre o projeto


Essa parte do projeto é responsável pela criação da interface onde o usuário pode se cadastrar ou fazer login. Desenvolvida em React com Tailwind CSS, ela permite a construção rápida e responsiva da aplicação. A interface captura os dados inseridos nos campos pelo usuário e os envia para o backend. O backend, então, verifica as informações e, se encontrar um usuário compatível, retorna um token. O frontend salva esse token nos cookies do navegador, permitindo a autenticação de rotas privadas e o uso do token em requisições que exigem autenticação.

---

## Tecnologias

As seguintes ferramentas foram usadas na construção dessa parte do projeto:

React + Vite
Bibliotecas
-   **Axios (Requisição HTTP)**
-   **Js-cookie (Cookies do navegador)** 
-   **react-data-table-component (Contrução da tabela)**
-   **react-hook-form (Contrução do formulario)**
-   **react-icons (Icones)**
-   **react-router-dom (Roteamento das paginas)**
-   **ChackraUI (Componentes de estilização)**
-   **Tailwind (Estilização)**

---

## Como executar o projeto

### Pre-requisitos

Antes de começar, voce vai precisar ter instalado em sua maquina as seguintes ferramentas:

Nodejs
Editor de codigo (VsCode)
Git

### Rodando a Aplicacao

Apos instalado o NodeJs e glonado esse repositorio (Primeiramente voce precisa ter instalado o BackEnd).
0. Abrir essa pasta AuthCookies-Frontend em seu editor de codigo.
1. Iniciar um novo terminal.
2. No terminal, executar **npm install**
3. Apos instalar as Dependencias, acesse **src/services/api.js**
4. Configure esse arquivo com o endereço onde sua aplicação BackEnd esta rodando.
5. Execute o BackEnd como foi mostrado do ReadMe do repositorio.
6. No terminal (FrontEnd), voce ira executar o seguinte comando para inicializar o projeto **npm run dev**
7. Acessar a url que ira aparecer apos iniciar essa aplicação.


