const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  address:{
    type:String
  },
  dob:{
    type:Date,
  }
  
},{versionKey:false , timestamps:true}
);

module.exports = mongoose.model("practiseUser", userSchema);
