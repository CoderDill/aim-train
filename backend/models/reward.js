const db = require("../db");
const ExpressError = require("../expressError");

/** Related functions for rewards. */

class Reward {
  /** Find all rewards.
   *
   * Returns [{ name, image}, ...]
   **/

  static async findAll() {
    const result = await db.query(
      `SELECT id, name, image
           FROM rewards
           ORDER BY id`
    );

    return result.rows;
  }

  static async create(name, image, user_id) {
    if (!name || !image || !user_id) {
      throw new ExpressError("Missing required data", 400);
    }
    const result = await db.query(
      `INSERT INTO rewards (name, image, user_id) 
      VALUES ($1, $2, $3)
      RETURNING id, name, image, user_id`,
      [name, image, user_id]
    );
    return result.rows[0];
  }

  static async getAll(user_id) {
    const results = await db.query(
      `SELECT id, name, image
           FROM rewards
           WHERE rewards.user_id = $1`,
      [user_id]
    );
    const reward = results.rows;

    if (!reward) throw new ExpressError(`No rewards`);

    return reward;
  }

  /** Delete given reward from database; returns undefined. */

  static async remove(id) {
    let result = await db.query(
      `DELETE
           FROM rewards
           WHERE id = $1
           RETURNING id`,
      [id]
    );
    const reward = result.rows[0];

    if (!reward) throw new ExpressError(`No reward with id: ${id}`);
  }
}

module.exports = Reward;
