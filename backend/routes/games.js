const express = require("express");
const router = express.Router();

const Game = require("../models/game");

router.get("/:user_id", async function (req, res, next) {
    try {
    const {user_id} = req.params
    const game = await Game.getAll(user_id)

    return res.json(game);
  } catch (e) {
    return next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { score, user_id, reward_id } = req.body;
    const game = await Game.create(score, user_id, reward_id);

    return res.json(game);
  } catch (e) {
    return next(e);
  }
});


router.delete("/:id", async (req, res, next) => {
  try {
    await Game.remove(req.params.id);
    return res.send({ msg: "DELETED!" });
  } catch (e) {
    return next(e);
  }
});

module.exports = router;
