const fs = require("fs") ; 


const getData = (req , res) => {
    fs.readFile("./data.json" , (err ,data) => {
        if(err) {
            res.send(err)
        } else {
            res.send(data) ; 
        }
    })
}

module.exports = {
    getData
}