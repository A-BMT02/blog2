const express = require('express') ; 
const cors = require("cors") ; 
const { getData } = require("./utils") ; 
const { addData } = require("./utils") ; 
const bodyParser = require('body-parser') ; 
const mongoose = require('mongoose') ;
const jwt = require('jsonwebtoken') ; 
const bcrypt = require('bcrypt') ; 
const { addChallenge } = require('./utils') ; 
const dotenv = require('dotenv') ; 
const { addUser }  = require("./utils") ;
const { loginUser } = require("./utils") ; 
const verify = require("./verifyToken") ; 
const authRoute = require('./routes/auth') ;
const postRoute = require("./routes/posts") ;
const getRoute = require('./routes/gets') ; 
const putsRoute = require('./routes/puts') ; 

dotenv.config();
const PORT = process.env.PORT || 5000 ; 

const app = express()  ;

app.use(bodyParser.urlencoded({limit: '50mb' , extended : false }))

app.use(bodyParser.json({limit: '50mb'}))
app.use(cors()) ;  

app.use('/api/user' , authRoute) ; 
app.use('/api/post' , postRoute) ; 
app.use('/api/get' , getRoute) ; 
app.use('/api/put' , putsRoute) ; 

mongoose.connect(process.env.DB_CONNECT , () => {
    console.log("Connected to database") ; 
 
})

// app.post("/register" , (req , res) => {
//     addUser(req , res) ; 
// })

// app.post('/login' , (req , res) => {
//     loginUser(req , res) ; 
// })

app.get("/testing" , (req , res) => {
    res.send("Hello from Express!") ;
})
app.get("/data" , (req , res) => {
    getData(req , res) ;  
}) 

// app.post("/blog" , (req , res) => {
//     addData(req , res) ; 
// })

// app.post("/100daysofcode" , verify , (req , res) => {
//     addChallenge(req , res) ;
//     console.log(req.body) ; 
// })


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

