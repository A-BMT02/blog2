const express = require('express') ; 
const cors = require("cors") ; 
const { getData } = require("./utils") ; 
const { addData } = require("./utils") ; 
const bodyParser = require('body-parser') ; 
const mongoose = require('mongoose') ;
const jwt = require('jsonwebtoken') ; 
const bcrypt = require('bcrypt') ; 

const PORT = process.env.PORT || 5000 ; 

const app = express()  ;

app.use(bodyParser.urlencoded({limit: '50mb' , extended : false }))

app.use(bodyParser.json({limit: '50mb'}))
app.use(cors()) ; 

const password = "Mongodb_02" ; 

mongoose.connect(`mongodb+srv://AHMADBMTAHIR:${password}@cluster0.vnn9t.mongodb.net/blog2?retryWrites=true&w=majority`)

// const db = mongoose.connection ; 
// db.on("error" , console.error.bind(console , "connection error : ")) ; 
// db.once("open" , function() {
//     console.log("successfully connected to database") ; 

// }) 

app.get("/data" , (req , res) => {
    getData(req , res) ;  
})

app.post("/post" , (req , res) => {
    addData(req , res) ; 
})

app.post('/login' , (req , res) => {

    const username = req.body.username  ;
})

const users = [
    // {
    //     name  :"Ahmad" , 
    //     password : 
    // }
] ; 
app.get("/users" , (req , res) => {
    res.json(users) ; 
})

app.post("/users" , async (req , res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password.toString() , 10)  ;
         const user = {
        name : req.body.name , 
        password : hashedPassword
        } 
    users.push(user) ; 
    console.log(user) ;
    res.status(200).send();
    }
   catch(err) {
            console.log(err) ; 
            res.status(500).send() ; 
        }
    
})

app.post("/users/login" , async (req , res) => {
    const user = users.find(user => user.name === req.body.name) ;
    if(user == null) {
        return res.status(400).send("User not found") ; 
    }
    try {
        if(await bcrypt.compare(req.body.password , user.password)) {
            res.send("Logged in") ;
        } else {
            res.send("Not allowed") ;
        }
    } catch(err){
        console.log(err) ; 
        res.status(500).send() ;
    }
})

app.listen(PORT , () => {
    console.log("server running" , PORT) ; 
})

