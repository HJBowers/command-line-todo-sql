#!/usr/bin/env node
const pg = require('pg');
const connectionString = 'postgres://localhost:5432/commandline';
const client = new pg.Client(connectionString);
client.connect();

const addTask = (taskInput) => client.query("INSERT INTO tasks (name) VALUES ($1) RETURNING id", [taskInput])
  .then(res => {
    console.log("Created task " + res.rows[0].id)
  })
  .catch( e => console.error(e.stack))
  .then(() => client.end())

const listTasks = () => client.query("SELECT * FROM tasks WHERE completed=false")
  .then(res => {
    const list = res.rows
    let counter = 0
    console.log("ID Description \n-- -----------")
    list.forEach(function(task) {
      counter++
      console.log(task.id + "   " + task.name)
    })
    console.log("\nYou have " + counter + ' tasks')
  })
  .catch( e => console.error(e.stack))
  .then(() => client.end())

const completeTask = (taskInput) => client.query("UPDATE tasks SET completed=true WHERE name=$1 RETURNING *", [taskInput])
  .then(res => console.log("Completed task " + res.rows[0].id + ": '" + taskInput + "'"))
  .catch( e => console.error(e.stack))
  .then(() => client.end())

const deleteTask = (taskInput) => client.query("DELETE FROM tasks WHERE id=$1 RETURNING *", [taskInput])
  .then(res => console.log("Deleted task " + taskInput + ": '" + res.rows[0].name + "'"))
  .catch( e => console.error(e.stack))
  .then(() => client.end())

module.exports = { addTask, listTasks, completeTask, deleteTask }
