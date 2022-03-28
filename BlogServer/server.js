const express = require('express') ; 
const cors = require("cors") ; 
const { getData } = require("./utils") ; 
const { addData } = require("./utils") ; 
const bodyParser = require('body-parser') ; 


const PORT = process.env.PORT || 5000 ; 

const app = express()  ;

app.use(bodyParser.urlencoded({limit: '50mb' , extended : false }))

app.use(bodyParser.json({limit: '50mb'}))
app.use(cors()) ; 


app.get("/data" , (req , res) => {
    getData(req , res) ;  
})

app.post("/post" , (req , res) => {

    addData(req , res) ; 
})



app.listen(PORT , () => {
    console.log("server running" , PORT) ; 
})

