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

const addData = (req , res) => {
    fs.readFile("./data.json" , (err ,data) => {
        if(err) {
            res.send(err) ; 
        } else {
            let allData = JSON.parse(data) ; 
            allData.push(req.body) ; 
            console.log(allData) ;
            fs.writeFile("./data.json" , JSON.stringify(allData) , err => {
                if(err) {
                    console.log(err)
                } else {
                    console.log("successfully added") ; 
                }
            })  
        }
    })
 
}

module.exports = {
    getData , 
    addData
}