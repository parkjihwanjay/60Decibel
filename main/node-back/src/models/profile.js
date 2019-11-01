const mongoose = require('mongoose');
const validator = require('validator');

const profileSchema = new mongoose.Schema({
  user : {
    type : mongoose.Schema.Types.ObjectId,
    required : true,
    ref : 'User',
  },
  gender : {
    type : String,
    // required : true,
    default : "",
  },
  birth_date : {
    type : String,
    // required : true,
    default : "",
  },
  height : {
    type : Number,
    default : 160,
    // required : true,
    validate(value){
      if(value<=0)
        throw new Error('키는 최소 0 이상입니다.');
    }
  },
  weight : {
    type : Number,
    default : 60,
    // required : true,
    validate(value){
      if(value<=0)
        throw new Error('체중은 최소 0 이상입니다.');
    }
  },
  name : {
    type : String,
    default : "",
    // required : true,
    trim : true,
  },
  had_checkup : {
    type : Boolean,
    // required : true,
    default : false,
  },
  had_checkup_true : {
    type : String,
    default : "",
    // required : true,
  },
  diagnosed_disease : {
    type : Array,
    default : [],
    // required : true,
  },
  taking_medicine : {
    type : String,
    default : "",
    // required : true,
  },
  what_medicine : {
    type : String,
    default : "",
    // required : true,
  },
  family_history : {
    type : Array,
    default : [],
    // required : true,
  },
  drinking : {
    type : Boolean,
    // required : true,
    default : false,
  },
  drinking_per_week : {
    type : String,
    default : "",
    // required : true,
  },
  smoking : {
    type : Boolean,
    // required : true,
    default : false,
  },
  how_long_smoking : {
    type : String,
    default : "",
    // required : true,
  },
  how_much_smoking : {
    type : String,
    default : "",
    // required : true,
  },
  job : {
    type : String,
    default : "",
    // required : true,
  },
  relevant_data : {
    type : Array,
    default : [],
  },

})

profileSchema.methods.toJSON = function(){
  const profile = this;
  const profileObject = profile.toObject();

  delete profileObject.__v;
  delete profileObject._id;
  delete profileObject.user;

  return profileObject;
}

const Profile = mongoose.model('Profile', profileSchema)

module.exports = Profile;