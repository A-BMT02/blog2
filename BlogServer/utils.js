const { exist } = require("@hapi/joi/lib/base");
const fs = require("fs") ;
const { default: mongoose } = require("mongoose");
const { db } = require("./model");
const { blog } = require("./model") ;
const user  = require("./user") ;
const { registerValidation , loginValidation } = require('./validation') ;
const bcrypt = require("bcryptjs") ; 
const jwt = require('jsonwebtoken') ; 

const MongoClient = mongoose.MongoClient ;


const getData = async (req , res) => {
    await db.collection("blogs").find({}).toArray(function(err , result){
    if(err) {
        console.log(err) ;
        res.send(err) ;
    } else {
        res.json(result) ;
    }
    }) ;

    // console.log(db.collection("blogs")).find({}) ;
}


module.exports = {
    getData ,
}