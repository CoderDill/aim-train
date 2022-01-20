/** Routes for users of pg-intro-demo. */

const express = require("express");
const router = express.Router();

const User = require("../models/user");

router.get("/", async function (req, res, next) {
  try {
    const user = await User.findAll();

    return res.json(user);
  } catch (e) {
    return next(e);
  }
});

router.get("/:username", async (req, res, next) => {
  try {
    const { username } = req.params;
    const user = await User.get(username);
    return res.json(user);
  } catch (e) {
    return next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.register(username, password);

    return res.json(user);
  } catch (e) {
    return next(e);
  }
});

router.post("/login", async function (req, res, next) {
  try {
    let { username, password } = req.body;
    const user = await User.authenticate(username, password);
    return res.json(user);
  } catch (err) {
    return next(err);
  }
});


router.delete("/:username", async (req, res, next) => {
  try {
    User.remove(req.params.username);
    return res.send({ msg: "DELETED!" });
  } catch (e) {
    return next(e);
  }
});

module.exports = router;
