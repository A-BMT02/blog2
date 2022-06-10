const mongoose = require('mongoose') ; 

const ChallengeSchema = new mongoose.Schema({
    _id : {
        type : mongoose.Schema.Types.ObjectId,
        required : true 
    } ,
    name : {
        type : String ,
        required : true 
    } ,

    update : {
        type : Array 
    } , 

    priorSkills : {
        type : Array 
    } , 
    
    priorNote : {
        type : String
    } , 
    goals : {
        type : Array
    } , 
    startDate : {
        type : Date
    } , 

})

const challenge = mongoose.model("challenge" , ChallengeSchema) 
module.exports = challenge ; 

