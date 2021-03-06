const router = require('express').Router();
const blog  = require("../model") ;
const tweet = require("../tweet") ;
const { db } = require("../model");
const verify = require("../verifyToken") ; 
const challenge  = require('../challenges') ; 
const user  = require('../user') ; 
const jwt = require("jsonwebtoken") ; 


router.post('/blog' , (req ,res) => {
     console.log(req.body) ;
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
    // console.log(req.body)
    console.log(req.body.user.id) ;
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
                    name : req.body.challengeName ,
                    priorSkills , 
                    priorNote , 
                    goals , 
                    startDate , 
                    userId : req.body.user.id
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
    challenge.findOne({userId : id} , function(err ,data) {
        if(err) {
            console.log('error is ' ,err) ; 
        } else {
            const update = data.update ;
            update.push({goals , note , day}) ;
            console.log('update is ' , update) ; 

            challenge.findOneAndUpdate({userId : id} , { update } , { new : true} , function(err) {
                if(err) {
                    console.log(err) ;
                } else {
                    console.log('done') ;
                    res.send(req.body) ;

                }
            }) ;
           
        }
    }) 
    
    //  const previous = doc.
    //  const doc = await challenge.findOneAndUpdate({_id : id} ,{ update : ...update}  , { new : true}) 
    // //const user = jwt.verify(token , process.env.TOKEN_SECRET) ;
    // console.log(doc) ; 
  

})
    

router.post('/finduser' , async (req , res) => {
    const token = req.body.token ; 
    // console.log(token) ; 
    const verified = jwt.verify(token , process.env.TOKEN_SECRET) ;
    // console.log(verified) ; 

    const exists= await user.find({_id : verified._id});
    // console.log(exists[0]) 
     const User = {
            id : exists[0]._id , 
            email : exists[0].email , 
            token ,
            back : exists[0].back ,
            bio : exists[0].bio, 
            front : exists[0].front,
            name : exists[0].name 
        }
        // console.log(User) ; 
        res.header('auth-token' , token).send(User) ; 


})

router.post('/tweetliked' , async (req ,res) => {
    console.log(req.body) ; 
    const id = req.body.id ;
    const a = await tweet.findOne({_id : id})

    
    console.log(a) ; 

    const allLikes = a.liked.find(user => {
        return  user == req.body.by
    })
    if(allLikes) {
        // console.log('already liked')
        res.send('success') ;
    } else {
    // console.log('not liked') ; 
        await tweet.findOneAndUpdate(
            { _id : id } ,
            {$push : {
                liked : req.body.by 
            }}
        )
    }
})

router.post('/tweetlikedremove' , async (req ,res) => {
     console.log(req.body) ; 
    const id = req.body.id ;
    const a = await tweet.updateOne({_id : id} , {
        $pullAll : {
            liked : [`${req.body.by}`]
        }
    } , {new: true})

    tweet.find({} , async (err , result) => {
    if(err) {
        // console.log(err) ;
        res.send(err) ;
    } else {
        const b = await Promise.all(result.map( async (tweet) => {
            const foundUser = await user.findOne({_id : tweet.userId}) ;
            const tweetObject = tweet.toObject() ; 
            tweetObject.front = foundUser.front ;
            return tweetObject ; 
        })) 

        // console.log(b) ; 

        res.json(b) ;
    }
    }) ;

    // const tweets = await tweet.find({})
    // console.log(tweets) ; 
    

    // res.send(tweets) ;

 
})

router.post('/reply/post' , async (req , res ) => {
    const tweetsId = req.body.tweetId ;
    const id = req.body.user.id ; 
    const comment = req.body.reply ; 
    console.log(id ,comment) ; 

     const a = await tweet.updateOne({_id : tweetsId} , {
        $push : {
            reply : {
                'comment' : comment ,
                'userId' : id
            }
        }
    } , {new: true})

    res.send('success') ; 
})
 
module.exports = router ; 