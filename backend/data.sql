CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "username" varchar,
  "password" password,
  "email" text,
  "reward_level" int
);

CREATE TABLE "rewards" (
  "id" SERIAL PRIMARY KEY,
  "image" text,
  "user_id" int
);

CREATE TABLE "games" (
  "id" SERIAL PRIMARY KEY,
  "score" int,
  "user_id" int,
  "reward_id" int
);

ALTER TABLE "rewards" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "games" ADD FOREIGN KEY ("reward_id") REFERENCES "rewards" ("id");

ALTER TABLE "games" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");