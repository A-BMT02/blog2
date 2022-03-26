const express = require('express') ; 
const cors = require("cors") ; 

const PORT = process.env.PORT || 5000 ; 

const app = express()  ;

app.use(cors({
    origin : "http://127.0.0.1:3000/blog2"
}))
app.get("/api" , (req , res) => {
    res.json({
        running : true
    })
})


app.listen(PORT , () => {
    console.log("server running" , PORT) ; 
})

