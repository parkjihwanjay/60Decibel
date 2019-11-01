const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Profile = require('./profile.js');
const Stomach = require('./stomach.js');

const userSchema = new mongoose.Schema({
  username : {
   type : String,
   required : true,
   unique : true,
  },
  email : {
    type : String,
    unique : true,
    required : true,
    validate(value){
      if(!validator.isEmail(value))
       throw new Error('email error');
    }
  },
 password : {
   type : String,
   required : true,
   trim : true,
   validate(value){
     if(value.length<6)
       throw new Error('password error');
   }
 },
//  password2 : {
//   type : String,
//   required : true,
//   trim : true,
//  },
 tokens : [{
   token : {
     type : String,
     required : true,
   }
 }]
}, {
  timestamps : true,
})

// userSchema.virtual('tasks', {
//   ref : 'Task',
//   localField : '_id',
//   foreignField : 'owner',
// })

userSchema.methods.toJSON = function(){
    const user = this;

    const userObject = {
      username : user.username,
    }
  
    return userObject;
}

userSchema.methods.generateAuthToken = async function(){
    const user = this
    const token = jwt.sign({_id : user._id.toString()}, '60Decibel');
  
    user.tokens = user.tokens.concat({token})
    await user.save();
    return token;
} 

userSchema.statics.findByCredentials = async(username, password) => {
    const user = await User.findOne({username})
  
      if(!user)
        throw new Error('Unable to login');
  
      const isMatch = await bcrypt.compare(password, user.password);
  
      if(!isMatch)
        throw new Error('Unable to login');
      
      return user;
}

userSchema.pre('save', async function(next){
    const user = this
    
    // if(user.password1 !== user.password2){
    //   throw new Error('비밀번호가 맞지 않습니다.');
    // }

    if(user.isModified('password')){
      user.password = await bcrypt.hash(user.password, 8);
      // user.password2 = await bcrypt.hash(user.password2, 8)
    }

    next();
})

userSchema.pre('remove', async function(next){
    const user = this
    await Profile.deleteOne({ user : user._id});
    await Stomach.deleteMany({
      author : user._id,
    })
    next();
})
// userSchema.post('save', async function(next){
//   const user = this;
//   console.log(user);
//   try{
//     const profile = new Profile({
//       user : user._id,
//     })
//     console.log(profile); 
//     await profile.save();
//     next();
//   }catch(e){
//     throw new Error('error during making profile');
//   }
// })

const User = mongoose.model('User', userSchema)

module.exports = User;