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

function checkFormatTarefa(req, res, next){
  if(!req.body.id || !req.body.title ){
    return res.status(400).json({erro: 'Formato inválido.'})
  }
  
  return next(); 
}

function checkFormatTasks(req, res, next){
  if(!req.body.tasks.title){
    return res.status(400).json({erro: 'Formato da task inválido.'})
  }

  return next();
}

function existeTarefa(req, res, next){
  const { id } = req.params;

  const tarefa = projects.find(projects => projects.id == id)
  
  if (!tarefa) {
    return res.status(400).json({error: 'Tarefa não encontrada.'});
  }
  
  req.tarefa = tarefa;
  return next();
}

server.post('/projects', checkFormatTarefa,(req, res) => {
  const { id, title } = req.body;
  
  const project = {
    id,
    title,
    tasks: []
  };

 if (projects.find(projects => projects.id == id)) {
  return res.status(400).json({error: `O id: ${id} já encontra-se em uso, por favor escolha outro.`});
 }

  project.id = id;
  project.title = title;

  projects.push(project);
 
  return res.json(projects);
})

server.post('/projects/:id/tasks', existeTarefa, (req, res) => {
  const { title } = req.body;
  
  req.tarefa.tasks.push(title);
  console.log(req.tarefa);

  return res.json(req.tarefa);
  
});

server.put('/projects/:id', existeTarefa, (req, res) => {
  const { title } = req.body;
  const { tasks } = req.body;
  
  req.tarefa.title = title;
  req.tarefa.tasks = tasks;

  return res.json(req.tarefa);
});

server.delete('/projects/:id', existeTarefa, (req, res) =>{
   projects.splice(tarefa => tarefa.id == req.tarefa.id, 1)
  return res.json(projects);
})

server.get('/projects', (req, res) => {
  return res.json(projects);
})

server.get('/projects/:id', existeTarefa, (req, res) => {
  return res.json(projects.find(projects => projects.id == req.tarefa.id));
});

server.listen(3000)