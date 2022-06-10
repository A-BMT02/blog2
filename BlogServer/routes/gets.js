const router = require('express').Router();
const challenge  = require('../challenges') ;
const tweet = require("../tweet") ;


router.get('/challenges/update' , (req , res) => {
    const id = req.header('auth-id') ;
    challenge.find({_id : id} , function(err, doc){
        if(err) {
            console.log(err) ;
        } else {
            console.log(doc[0].update) ;
            res.send(doc[0].update) ;
        }
    })
})

router.get('/challenges' , (req , res) => {
    const id = req.header('auth-id') ;
    challenge.find({_id : id} , function(err , doc){
        if(err) {
            console.log(err)
        } else {
            res.send(doc) ;
        }
    })
})

router.get('/time' , (req , res) => {
    const id = req.header('auth-id') ;
    challenge.findOne({_id : id} ,function(err ,doc){
        if(err) {
            console.log(err) ;
        } else {
            res.send(doc.startDate) ;
        }
    })
})

router.get('/tweets' ,  (req , res)  => {

   return tweet.find({} , (err , result) => {
    if(err) {
        // console.log(err) ;
        res.send(err) ;
    } else {
        // console.log(result) ;
        res.json(result) ;
    }
    }) ;


})

router.get('/allchallenges' , (req ,res) => {
    return challenge.find({} , (err , result) => {
    if(err) {
        //  console.log(err) ;
        res.send(err) ;
    } else {
        // console.log(result) ;
         res.json(result) ;
    }
    }) ;
})

module.exports = router ;