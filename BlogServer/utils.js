const fs = require("fs") ; 
const { default: mongoose } = require("mongoose");
const { db } = require("./model");
const blog = require("./model") ; 

const MongoClient = mongoose.MongoClient ; 

const getData = (req , res) => {
    

     
   db.collection("blogs").find({}).toArray(function(err , result){
    if(err) {
        console.log(err) ;
        res.send(err) ;
    } else {
        res.json(result) ; 
    }
    }) ;
    // fs.readFile("./data.json" , (err ,data) => {
    //     if(err) {
    //         res.send(err)
    //     } else {
    //         res.send(data) ; 
    //     }
    // })
}

const addData = (req , res) => {

    const newBlog =  blog(req.body) ; 

    newBlog.save((err, doc) => {
        if(err) {
            console.log(err) ; 
            res.send(err) ; 
        } else {
            console.log("succesfully added") ; 
            res.json(doc) ; 
        }
    } )
 
    // fs.readFile("./data.json" , (err ,data) => {
    //     if(err) {
    //         res.send(err) ; 
    //     } else {
    //         let allData = JSON.parse(data) ; 
    //         allData.push(req.body) ; 
    //         console.log(allData) ;
    //         fs.writeFile("./data.json" , JSON.stringify(allData) , err => {
    //             if(err) {
    //                 console.log(err)
    //             } else {
    //                 console.log("successfully added") ; 
    //             }
    //         })  
    //     }
    // })
 
}

module.exports = {
    getData , 
    addData
}