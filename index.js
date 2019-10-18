const express = require('express');

const server = express();

server.use(express.json());

const projects = [
  {"id": "1", "title": "Casa",  "tasks": ["arrumar casa", "lavar banheiro"]},
  {"id": "2", "title": "Carro",  "tasks": ["levar ao mecânico", "trocar pneu"]},
  {"id": "3", "title": "Exercício",  "tasks": ["Correr 1km na praia"]}
];

//insert
server.post('/projects', (req, res) => {
  const { id } = req.body;
  const { title } = req.body;
  const { tasks } = req.body;

  projects.push({id, title, tasks});
 
  return res.json(projects);
})

//update
server.put('/projects/:id', (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const { tasks } = req.body;

  const tarefa = projects.find( projects => projects.id == id);
  
  tarefa.title = title;
  tarefa.tasks = tasks;

  return res.json(projects);

});

//delete
server.delete('/projects/:id', (req, res) =>{
  const { id } = req.params;
  const tarefa = projects.find(projects => projects.id == id)

  projects.splice(tarefa, 1)
  return res.json(projects);
})

//getall
server.get('/projects', (req, res) => {
  return res.json(projects);
})

//getbyid
server.get('/projects/:id', (req, res) => {
  const { id } = req.params;

  const tarefa = projects.find( projects => projects.id == id);

  return res.json(tarefa);
});

server.listen(3000)