const mongoose = require("mongoose") ; 

const BlogSchema = new mongoose.Schema({ 
    author : {
        type : String , 
        required : true
    } , 
    date : {
        type : String , 
        required : true
    } , 
    category : {
        type : String , 
        required : true
    } , 
    editorsPick : {
        type : Boolean, 
        required : true
    } , 
    header : {
        type : String , 
        required : true
    } , 
    img : {
        type : String , 
        required : true
    } , 
    sneak : {
        type : String , 
        required : true
    } , 
    title : {
        type : String , 
        required : true
    } , 
    wholeBlog : {
        type : String , 
        required : true
    } , 
    userId : {
        type : String
    }

}
)

const blog = mongoose.model("blog" , BlogSchema) ;

module.exports = blog ;