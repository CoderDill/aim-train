DROP DATABASE IF EXISTS rewards_db;

CREATE DATABASE rewards_db;

\c rewards_db;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS rewards;

CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "username" text UNIQUE NOT NULL,
  "password" text NOT NULL,
  "email" text NOT NULL
);

CREATE TABLE "rewards" (
  "id" SERIAL PRIMARY KEY,
  "name" text,
  "image" text,
  "user_id" int
);

ALTER TABLE "rewards" 
ADD FOREIGN KEY ("user_id") 
REFERENCES "users" ("id") ON DELETE CASCADE;