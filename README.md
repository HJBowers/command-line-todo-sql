# Goals:
Test the functionality of the commandline todos app with unit and integration/behavior tests


## Steps:
- Clean up architecture / refactorings
REMOVE:  - taskStore.js => manages data store (readFile/writeFile)
QUERIES:  - commands/ => actions to manipulate tasks
  - tasks.js => primary script / UI
- Set up isolated test environment
- Write unit tests for core functions
- Write integration tests for overall app behavior



## Getting Started

1. Clone this repo
2. Install all npm packages

    ```
    $ npm install
    ```
3. Create development and test database and update schemas

    ```
    $ npm run db:create
    ...
    $ npm run db:schema
    ```
4. Reset database:

    ```
    $ npm run db:reset
    ```
