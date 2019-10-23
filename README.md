<p align="center">
    <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="200px" />  
</p>

Primeira desafio do bootcamp GoStack da Rocketseat. &nbsp;&nbsp;<span><img src="https://rocketseat.com.br/static/images/logo-rocketseat.svg"><span>

Sobre o desafio:

Criar uma api para armazenar projetos e suas tarefas utilizando Express e os conceitos de middlewares.

Rotas
POST /projects: A rota deve receber id e title dentro do corpo e cadastrar um novo projeto dentro de um array no seguinte formato: { id: "1", title: 'Novo projeto', tasks: [] }; Certifique-se de enviar tanto o ID quanto o título do projeto no formato string com aspas duplas.

GET /projects: Rota que lista todos projetos e suas tarefas;

PUT /projects/:id: A rota deve alterar apenas o título do projeto com o id presente nos parâmetros da rota;

DELETE /projects/:id: A rota deve deletar o projeto com o id presente nos parâmetros da rota;

POST /projects/:id/tasks: A rota deve receber um campo title e armazenar uma nova tarefa no array de tarefas de um projeto específico escolhido através do id presente nos parâmetros da rota;

Middlewares
Crie um middleware que será utilizado em todas rotas que recebem o ID do projeto nos parâmetros da URL que verifica se o projeto com aquele ID existe. Se não existir retorne um erro, caso contrário permita a requisição continuar normalmente;

Crie um middleware global chamado em todas requisições que imprime (console.log) uma contagem de quantas requisições foram feitas na aplicação até então.

Video do Projeto:

<video width="800" height="600" controls preload>
  <source src="/videos/Desafio01.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
<br/>
<br/>

Imagens do projeto: 

<p align="center">
    <img alt="GoStack" src="./imagens/captura01.PNG" />  
    <p align="center">Cadastrar novo projeto </p>
</p>
<br/>

<p align="center">
    <img alt="GoStack" src="./imagens/captura03.PNG" />  
    <p align="center">Cadastrar uma tarefa ao projeto </p>
</p>
<br/>

<p align="center">
    <img alt="GoStack" src="./imagens/captura05.PNG" />  
    <p align="center">Atualizar projeto </p>
</p>
<br/>

<p align="center">
    <img alt="GoStack" src="./imagens/captura06.PNG" />  
    <p align="center">Listar todos os projetos </p>
</p>
<br/>

<p align="center">
    <img alt="GoStack" src="./imagens/captura07.PNG" />  
    <p align="center">Listar projeto por identificador </p>
</p>
<br/>

<p align="center">
    <img alt="GoStack" src="./imagens/captura08.PNG" />  
    <p align="center">Excluir projeto</p>
</p>
<br/>