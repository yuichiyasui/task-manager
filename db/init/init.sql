CREATE TABLE IF NOT EXISTS users (
    id VARCHAR(26) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP
);

CREATE TYPE task_status AS ENUM ('todo', 'in-progress', 'done');

CREATE TABLE IF NOT EXISTS tasks (
    id VARCHAR(26) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status task_status NOT NULL,
    user_id VARCHAR(26) NOT NULL REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP
);