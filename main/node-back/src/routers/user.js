const express = require('express');
const User = require('../models/user.js');
const Profile = require('../models/profile.js');

const auth = require('../middleware/auth.js');
const router = new express.Router();

router.get('/users', auth, async(req, res) => {
  try{
    res.send(req.user);
  }catch(e){
    res.status(404).send();
  }
})

router.post('/users', async(req, res) => {
  const user = new User(req.body);

  try{
    await user.save();
    const token = await user.generateAuthToken();
    // const profile = new Profile({
    //   user : user._id,
    // })
    // await profile.save();
    res.status(201).send({
      username : user.username,
      token
    });
  }catch(e){
    res.status(400).send(e);
  }
})

router.post('/users/login', async(req, res) => {
  try{
    const user = await User.findByCredentials(req.body.username, req.body.password);
    const token = await user.generateAuthToken();
    res.send({
      username : user.username,
      token,
    });
  }catch(e){
    // console.log(e.message);
    res.status(400).send();
  }
})

router.post('/users/logout', auth, async(req, res) => {
  try{
    req.user.tokens = req.user.tokens.filter(token => token.token !== req.token);
    await req.user.save();

    res.send();
  }catch(e){
    res.status(500).send();
  }
})

router.delete('/users/me', auth, async(req, res) => {
  try{
    await req.user.remove();
    res.send(req.user);
  }catch(e){
    res.status(500).send(e);
  }
})

module.exports = router;