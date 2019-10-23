const express = require('express');

const server = express();

server.use(express.json());

let = requisicao = 0; 

const projects = [];

server.use((req, res, next) => {
  requisicao ++;
  console.log(`Quantidade de Requisições feitas: ${requisicao}`)
  next();
});

function existeProjeto(req, res, next){
  const { id } = req.params;

  const project = projects.find(projects => projects.id == id)
  
  if (!project) {
    return res.status(400).json({error: 'Tarefa não encontrada.'});
  }
  
  req.project = project;
  return next();
}

server.post('/projects',(req, res) => {
  const { id, title } = req.body;

  if(!req.body.id || !req.body.title ){
    return res.status(400).json({erro: 'Formato da requisição é inválida, por favor acerte-a.'})
  }

  const project = {
    id,
    title,
    tasks: []
  };

 if (projects.find(project => project.id == id)) {
  return res.status(400).json({error: `O identificador: ${id} já encontra-se em uso, por favor escolha outro.`});
 }

  project.id = id;
  project.title = title;

  projects.push(project);
 
  return res.json(`O projeto: ${project.title} foi cadastrado com sucesso.`);
})

server.post('/projects/:id/tasks', existeProjeto, (req, res) => {
  const { title } = req.body;
  
  if(!req.body.title){
    return res.status(400).json({erro: 'Formato da requisição é inválida, por favor acerte-a.'})
  }

  req.project.tasks.push(title);

  return res.json(`A tarefa ${title} foi cadastrada com sucesso.`);
   
});

server.put('/projects/:id', existeProjeto, (req, res) => {
  const { title } = req.body;

  if(!req.body.title){
    return res.status(400).json({erro: 'Formato da requisição é inválida, por favor acerte-a.'})
  }

  req.project.title = title;

  return res.json(`O projeto ${req.project.title} foi atualizado com sucesso.`);
});

server.delete('/projects/:id', existeProjeto, (req, res) =>{
  projects.splice(project => project.id == req.tarefa.id, 1)
  
  return res.json(`O projeto ${req.project.title} foi excluida com sucesso.`);
})

server.get('/projects', (req, res) => {
  return res.json(projects);
})

server.get('/projects/:id', existeProjeto, (req, res) => {
  return res.json(projects.find(project => project.id == req.project.id));
});

server.listen(3000)