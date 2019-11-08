const mongoose = require('mongoose');
const validator = require('validator');

const symptomSchema = new mongoose.Schema({
  author : {
    type : mongoose.Schema.Types.ObjectId,
    required : true,
    ref : 'User',
  },
  symptom_start : {
    type : String,
    default : "",
    // required : true,
  },
  symptom_start_less_than_month : {
    type : String,
    default : "",
    // required : true,
  },
  fast_or_slow : {
    type : String,
    default : "",
    // required : true,
  },
  symptom_situation : {
    type : String,
    default : "",
    // required : true,
  },
  symptom_location : {
    type : Array,
    default : [],
    // required : true,
  },
  location_move : {
    type : String,
    default : "",
    // required : true,
  },
  location_move_how : {
    type : String,
    default : "",
    // required : true,
  },
  pain_spread : {
    type : String,
    default : "",
    // required : true,
  },
  pain_spread_where : {
    type : String,
    default : "",
    // required : true,
  },
  pain_duration : {
    type : String,
    default : "",
    // required : true,
  },
  pain_repeated : {
    type : String,
    default : "",
    // required : true,
  },
  pain_how_often_day : {
    type : String,
    default : "",
    // required : true,
  },
  pain_how_often_many : {
    type : String,
    default : "",
    // required : true,
  },
  pain_worse : {
    type : String,
    default : "",
    // required : true,
  },
  pain_better : {
    type : String,
    default : "",
  },
  pain_score : {
    type : Number,
    default : 5,
  },
  pain_worse : {
    type : String,
    default : "",
  },
  pain_characer : {
    type : Array,
    default : [],
  },
  pain_experience : {
    type : String,
    default : "",
    // required : true,
  },
  associated_symptom_digestive : {
    type : Array,
    default : [],
  },
  associated_symptom_circulatory : {
    type : Array,
    default : [],
  },
  associated_symptom_gynecology : {
    type : Array,
    default : [],
  },
  associated_symptom_whole_body : {
    type : Array,
    default : [],
  },
  associated_symptom_digestive : {
    type : Array,
    default : [],
  },
  associated_symptom_urinary : {
    type : Array,
    default : [],
  },
  associated_symptom_others : {
    type : Array,
    default : [],
  },
  factor : {
    type : Array,
    default : [],
  },
  other_factor : {
    type : String,
    default : "",
  },
  abdomen_relevant : {
    type : Array,
    default : [],
  },
  free_to_describe : {
    type : String,
    default : "",
  }
}, {
  timestamps : true,
})

// symptomSchema.methods.toJSON = function(){
//   const stomach = this;
//   const stomachObject = stomach.toObject();

//   delete stomachObject._id;
//   delete stomachObject.author;
//   delete stomachObject.__v;

//   return stomachObject;
// }


const Stomach = mongoose.model('Stomach', symptomSchema)

module.exports = Stomach;