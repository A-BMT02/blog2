const mongoose = require('mongoose') ; 

const ChallengeSchema = new mongoose.Schema({
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
    userId : {
        type : String
    }

})

const challenge = mongoose.model("challenge" , ChallengeSchema) 
module.exports = challenge ; 

