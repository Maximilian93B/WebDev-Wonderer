-- This file holds the schema to the DB

-- Users Table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Territories Table
CREATE TABLE territories (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ENUM for User Progress status
CREATE TYPE progress_status AS ENUM ('Incomplete', 'Complete');

-- Districts Table
CREATE TABLE districts (
    id SERIAL PRIMARY KEY,
    territory_id INT NOT NULL,
    name TEXT,
    description TEXT,
    FOREIGN KEY (territory_id) REFERENCES territories (id)
);

-- Cells Table
CREATE TABLE cells (
    id SERIAL PRIMARY KEY,
    district_id INT NOT NULL,
    name TEXT,
    description TEXT,
    FOREIGN KEY (district_id) REFERENCES districts (id)
);

-- Challenges Table
CREATE TABLE challenges (
    id SERIAL PRIMARY KEY,
    cell_id INT NOT NULL,
    title TEXT,
    description TEXT,
    solution_hash TEXT,
    FOREIGN KEY (cell_id) REFERENCES cells (id)
);

-- User Progress Table
CREATE TABLE user_progress (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    challenge_id INT NOT NULL,
    status progress_status NOT NULL,
    hash_received TEXT,
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (challenge_id) REFERENCES challenges (id)
);

CREATE TABLE IF NOT EXISTS "user_progress" (
    id SERIAL,
    user_id INTEGER NOT NULL REFERENCES "User" ("id")
    username INTEGER NOT NULL REFERENCES "User" ("username"),
    points_bar INTEGER NOT NULL DEFAULT 0,
    challenge_id INTEGER REFERENCES "challenges" ("id") 
    hash_received TEXT,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL,
    PRIMARY KEY ("id")
);