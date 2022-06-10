const mongoose = require('mongoose') ; 

const userSchema = new mongoose.Schema({
    email : {
        type : String , 
        requiredPaths : true
    } ,
    password : {
        type : String , 
        required : true , 
    } , 
    front : {
        type : String
    } , 
    back : {
        type : String
    } , 
    bio : {
        type : String
    } , 
    name : {
        type : String 
    }

})

const user = mongoose.model("user" , userSchema) 
module.exports = user ; 