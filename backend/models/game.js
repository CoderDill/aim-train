const db = require("../db");
const ExpressError = require("../expressError");


class Game {
  static async getAll(user_id) {
    const results = await db.query(
      `SELECT id, score, user_id, reward_id
           FROM games
           WHERE games.user_id = $1`,
      [user_id]
    );
    const game = results.rows;

    if (!game) throw new ExpressError(`No games`);

    return game;
  }

  
}

module.exports = Game