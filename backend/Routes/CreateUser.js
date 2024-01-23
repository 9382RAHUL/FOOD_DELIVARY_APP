const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcryptjs");
const jwtsecret="edffffggfdswskillmememfkkfpepsslw$#";
router.post(
  "/createuser",
  body("email").isEmail(),

  body("name").isLength({ min: 5 }),
  body("password", "incorrect password").isLength({ min: 5 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const salt=await bcrypt.genSalt(10);
    let secpassword=await bcrypt.hash(req.body.password,salt);
    try {
      await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secpassword,
        location: req.body.location,
      });
      res.json({ success: true });
    } catch (err) {
      console.log(err);
      res.json({ success: false });
    }
  }
);

router.post(
  "/loginuser",
  body("email").isEmail(),
  body("password", "incorrect password").isLength({ min: 5 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let email = req.body.email;
    try {
      let userData = await User.findOne({ email });
      if (!userData) {
        return res.status(400).json({ errors: "try with correct credintials" });
      }
      let validPassword = await bcrypt.compare(req.body.password,userData.password);
      if (!validPassword) {
        return res.status(400).json({ errors: "try with correct credintials" });
      }
     const data={
      user:{
        id:userData.id,
      }
     }
     const authtoken=jwt.sign(data,jwtsecret);
      return res.json({ success: true ,authtoken:authtoken});
    } catch (err) {
      console.log(err);
      res.json({ success: false });
    }
  }
);
module.exports = router;
