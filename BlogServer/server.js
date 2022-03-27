const express = require('express') ; 
const cors = require("cors") ; 
const { getData } = require("./utils") ; 

const PORT = process.env.PORT || 5000 ; 

const app = express()  ;

app.use(cors()) ; 
// app.use(cors({
//     origin : "http://127.0.0.1:3000/b"
// }))
app.get("/data" , (req , res) => {
    getData(req , res) ;  
})



app.listen(PORT , () => {
    console.log("server running" , PORT) ; 
})

