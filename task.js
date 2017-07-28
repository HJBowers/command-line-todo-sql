const { addTask, listTasks, completeTask, deleteTask } = require('./database/queries.js')

let command = process.argv[2]
let taskInput = process.argv[3]

const run = (command, taskInput) => {
  if (command === 'list') {
    listTasks()
  }else if (command === 'add') {
    addTask(taskInput)
  }else if (command === 'complete') {
    completeTask(taskInput)
  }else if (command === 'delete') {
    deleteTask(taskInput)
  }else if (command) {
    console.log("Invalid Command")
  }
}

run(command, taskInput)

module.exports = run
