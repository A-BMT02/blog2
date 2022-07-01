const router = require('express').Router();
const challenge  = require('../challenges') ;
const tweet = require("../tweet") ;
const blog = require("../model")
const user  = require('../user') ; 



router.get('/challenges/update' , async (req , res) => {
    const id = req.header('auth-id') ;
    try {
        console.log('id is ' , id) ; 
       const a = await challenge.find({_id : id}) ; 
       if(a.length !== 0) {
           res.send(a[0].update) ;
       } else {
            res.status(400).send('Empty 100daysofcode') ;
       }
        //  await challenge.find({_id : id} , function(err, doc){
        // if(err) {
        //     console.log('err is ' , err) ;
        // } else {
        //     if(doc[0].update) {
        //         console.log(doc[0].update) ;
        //         res.send(doc[0].update) ;
        //     } else {
        //         console.log('no update') ; 
        //     }
            
        // }
    // })
    } catch(error) {
        console.log('error is ' , error) ;

    }
   
})

router.get('/challenges' , (req , res) => {
    const id = req.header('auth-id') ;
    console.log(id) ;
    challenge.find({userId : id} , function(err , doc){
        if(err) {
            console.log(err)
        } else {
            console.log(doc) ;
            res.send(doc) ;
        }
    })
})

router.get('/time' , (req , res) => {
    const id = req.header('auth-id') ;
    challenge.findOne({userId : id} ,function(err ,doc){
        if(err) {
            console.log(err) ;
        } else {
            res.send(doc.startDate) ;
        }
    })
})

router.get('/tweets' ,   (req , res)  => {
        let allTweets = [] ;
    tweet.find({} , async (err , result) => {
    if(err) {
        // console.log(err) ;
        res.send(err) ;
    } else {
        const b = await Promise.all(result.map( async (tweet) => {
            const foundUser = await user.findOne({_id : tweet.userId}) ;
            const tweetObject = tweet.toObject() ; 
            tweetObject.front = foundUser.front ;
            tweetObject.name = foundUser.name ;
           
            const reply = await Promise.all(tweetObject.reply.map(async (r) => {
                const foundUser = await user.findOne({_id : r.userId}) ;
                // console.log('found user is ' , foundUser) ; 
                let a = r ; 
                a.front = foundUser.front ; 
                a.name = foundUser.name ;
                // console.log('a is ' , a ) ; 
                return a ;
            }))
            tweetObject.reply = reply ; 
            // console.log(tweetObject) ; 
            return tweetObject ; 
        })) 

        //  const c = await Promise.all(b.map( async (tweet) => {
        //          return await Promise.all(tweet.reply.map( async (r) => {
        //             const foundUser = await user.findOne({_id : r.userId}) ;
        //             r.front = foundUser.front ; 
        //             r.name = foundUser.name ;
        //             //  console.log(tweet) ; 
        //             return tweet ;
        //         }))
        //     }))

            // console.log(b) ; 

        // console.log(b) ; 

        // res.json(b) ;
        res.json(b) ; 
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

router.get('/myblogs' , async (req ,res) => {
    const id = req.header('auth-id') ;

    const exists= await blog.find({userId : id});
    // console.log(exists) ;
    res.status(200).send(exists) ; 
})

router.get('/mytweets' , async (req , res) => {
    const id = req.header('auth-id') ;

    const exists = await tweet.find({userId : id}) ; 
    console.log(exists) ; 
    res.send(exists) ; 
})

module.exports = router ;