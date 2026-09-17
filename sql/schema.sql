CREATE TABLE projects (
  project_id INTEGER PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE tasks (
  task_id VARCHAR(36) PRIMARY KEY,
  project_id INTEGER NOT NULL REFERENCES projects(project_id),
  title VARCHAR(80) NOT NULL,
  description VARCHAR(240),
  priority VARCHAR(10) NOT NULL CHECK(priority IN ('Alta','Média','Baixa')),
  status VARCHAR(10) NOT NULL CHECK(status IN ('todo','doing','done')),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_tasks_project_status ON tasks(project_id,status);
