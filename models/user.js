const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
    name:{
       type:String,
       required:true 
    },
    email:{
        type:String,
        required:true ,
        unique:true
     },
     password:{
         type:String,
         require:true
         
     },
     register_date:{
         type: Date,
         default: Date.now
     } 

})
module.exports= User = mongoose.model('user',UserSchema);