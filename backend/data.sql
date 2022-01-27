DROP DATABASE IF EXISTS aim_train_db;

CREATE DATABASE aim_train_db;

\c aim_train_db;

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