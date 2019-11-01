const express = require('express');
const User = require('../models/user.js');
const Profile = require('../models/profile.js');
const Stomach = require('../models/stomach.js');
const auth = require('../middleware/auth.js');
const router = new express.Router();

router.post('/surveys/stomach', auth, async(req, res) => {
  
  try{
    const stomach = new Stomach({
      ...req.body,
      author : req.user._id,
    })
    await stomach.save();
    res.status(201).send({
      id : stomach._id,
    });
  }catch(e){
    res.status(400).send(e);
  }
})

router.get('/surveys/stomach', auth, async(req, res) => {
  try{
    const surveys = await Stomach.find({
      author : req.user._id,
    })
    res.send(surveys);
  }catch(e){
    res.status(404).send();
  }
})

router.get('/surveys/stomach/:id', auth, async(req, res) => {
  const _id = req.params.id;
  try{
    const survey = await Stomach.findOne({
      author : req.user._id,
      _id,
    })
    if(!survey)
      return res.status(404).send('해당하신 설문은 없습니다');

    const surveyObj = survey.toObject();

    delete surveyObj._id;
    delete surveyObj.__v;
    delete surveyObj.author;

    res.send(surveyObj);
  }catch(e){
    res.status(500).send(e);
  }
})

router.delete('/surveys/stomach/:id', auth, async(req, res) => {
  try{
    const survey = await Stomach.deleteOne({
      _id : req.params.id,
      author : req.user._id,
    })
    if(!survey)
      return res.status(404).send('해당하는 설문은 없습니다.');
    res.send(survey);
  }catch(e){
    res.status(500).send(e);
  }
})
module.exports = router;