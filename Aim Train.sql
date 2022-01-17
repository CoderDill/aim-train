CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "username" varchar,
  "password" password,
  "email" email,
  "reward_level" int
);

CREATE TABLE "rewards" (
  "id" SERIAL PRIMARY KEY,
  "image" text,
  "user_id" int
);

ALTER TABLE "rewards" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");
