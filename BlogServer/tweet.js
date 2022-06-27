const mongoose = require("mongoose") ; 

const TweetSchema = new mongoose.Schema({
    date : {
        type : String , 
        required : true
    } ,   
    tweet : {
        type : String , 
        required : true 
    } , 
    userId : {
        type : String
    } ,
    liked : [String] 
}
)

const tweet = mongoose.model("tweet" , TweetSchema) ;

module.exports = tweet ;