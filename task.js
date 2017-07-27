const queries = require("./database/queries")

let command = process.argv[2]
let task = process.argv[3]

const run = (command, task) => {
  if (command === 'list') {

  }else if (command === 'add') {

  }else if (command === 'done') {

  }else if (command) {
    console.log("Invalid Command")
  }
}

run(command, task)

module.exports = run
