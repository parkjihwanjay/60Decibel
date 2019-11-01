const express = require('express');
const User = require('../models/user.js');
const Profile = require('../models/profile.js');
const auth = require('../middleware/auth.js');
const router = new express.Router();

router.get('/profile', auth, async (req, res) => {
  try{
    const profile = await Profile.findOne({
      user : req.user._id,
    })
    res.send(profile);
  }catch(e){
    res.status(404).send(e);
  }
})

router.patch('/profile', auth, async(req, res) => {
  const requestUpdates = Object.keys(req.body);
  try{
    const profile = await Profile.findOne({
      user : req.user._id,
    })
    if(!profile)
      return res.status(404).send();

    requestUpdates.forEach(update => {
      profile[update] = req.body[update];
    })

    profile.save();

    res.send(profile);
  }catch(e){
    res.status(400).send(e);
  }
})

module.exports = router;