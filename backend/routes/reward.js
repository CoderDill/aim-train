const express = require("express");
const router = express.Router();

const Reward = require("../models/reward");

router.get("/", async function (req, res, next) {
  try {
    const reward = await Reward.findAll();

    return res.json(reward);
  } catch (e) {
    return next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { name, image, user_id } = req.body;
    const reward = await Reward.create(name, image, user_id);

    return res.json(reward);
  } catch (e) {
    return next(e);
  }
});

router.post("/testing", async (req, res, next) => {
  try {
    console.log(req.body);
  } catch (e) {
    return next(e);
  }
});

router.get("/:user_id", async (req, res, next) => {
  try {
    const rewards = await Reward.getAll(req.params.user_id);
    return res.json(rewards);
  } catch (e) {
    return next(e);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    await Reward.remove(req.params.id);
    return res.send({ msg: "DELETED!" });
  } catch (e) {
    return next(e);
  }
});

module.exports = router;
