const router = require('express').Router();
const blog  = require("../model") ;
const tweet = require("../tweet") ;
const { db } = require("../model");
const verify = require("../verifyToken") ; 
const challenge  = require('../challenges') ; 
const user  = require('../user') ; 
const jwt = require("jsonwebtoken") ; 


router.post('/blog' , (req ,res) => {
    // console.log(req.body) ;
    const newBlog =  blog(req.body.data) ;

    newBlog.save((err, doc) => {
        if(err) {
            console.log(err) ;
            res.send(err) ;
        } else {
            console.log("succesfully added") ;
            res.json(doc) ;
        }
    } )
})



router.post('/tweet' , verify , (req ,res) => {
    const newPost = tweet(req.body) ;

    newPost.save((err , doc) => {
        if(err) {
            console.log(err) ; 
            res.send(err) ; 
        } else {
            console.log('successfully added') ; 
            res.json(doc) ;
        }
    })

})

router.post('/100daysofcode' , verify,  (req , res) => {
    //find user
    const token = req.headers['auth-token'] ; 
    const user = jwt.verify(token , process.env.TOKEN_SECRET) ;
    const userId = user._id ; 
    const priorSkills = req.body.priorSkills ; 
    const priorNote = req.body.priorNote ; 
    const goals = req.body.goals ; 
    const startDate = req.body.startDate ; 

    //check if user has a challange document
    const check = challenge.find({_id : userId} , function(err , doc) {
        if(err) {
            console.log(err) ; 
            return res.status(400).send(err) ;
        } else {
            if(doc.length == 0) {
                const newChallenge = new challenge({
                    _id : userId , 
                    name : req.body.challengeName ,
                    priorSkills , 
                    priorNote , 
                    goals , 
                    startDate
                })
                newChallenge.save() ; 
                return res.status(200).send({
                    _id : userId , 
                    name : '100 Days Of Code' ,      
                })
            } else {
                console.log('User already in challenge') ;
            }
        }
    })
 
})

router.post('/update/100daysofcode' , async (req , res) => {
    const goals = req.body.goals ; 
    const note = req.body.priorNote ; 
    const day  = req.body.day ;
    const id = req.header('auth-id') ; 
    console.log(req.body) ; 
    
    //find user
    challenge.findOne({_id : id} , function(err ,data) {
        if(err) {
            console.log('error is ' ,err) ; 
        } else {
            const update = data.update ;
            update.push({goals , note , day}) ;

            challenge.findOneAndUpdate({_id : id} , { update } , { new : true} , function(err) {
                if(err) {
                    console.log(err) ;
                } else {
                    console.log('done') ;
                }
            }) ;
            // console.log(newChallenge) ; 
            // console.log(update) ; 
        }
    }) 
    
    //  const previous = doc.
    //  const doc = await challenge.findOneAndUpdate({_id : id} ,{ update : ...update}  , { new : true}) 
    // //const user = jwt.verify(token , process.env.TOKEN_SECRET) ;
    // console.log(doc) ; 
  

    res.send(req.body) ;
})
    



    


module.exports = router ; 