const mongoose= require('mongoose');

const userSchema=new mongoose.Schema({
    Username:{
        type:String,
        require:true,
        min:4,
        max:22,
        unique:true
    },
    Email:{
        type:String,
        require:true,
        max:32,
        unique:true
    },
    Password:{
        type:String,
        require:true,
        min:5,
    },
});
module.exports =mongoose.model("Users",userSchema);