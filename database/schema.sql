CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  completed BOOLEAN NOT NULL DEFAULT false
);
