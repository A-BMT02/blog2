const router = require('express').Router();
const user  = require("../user") ;
const { registerValidation , loginValidation } = require('../validation') ;
const bcrypt = require("bcryptjs") ; 
const jwt = require('jsonwebtoken') ; 


router.post('/register' , async (req , res) => {
    const {error} = registerValidation(req.body) ;
    if(error) {
        res.status(400).send({ error : error.details[0].message}) ;
        return ;
    }

        const exists= await user.find({email : req.body.email});
        if(exists.length !== 0 ) {
            // console.log("User Exists" , exists) ; 
            res.status(400).send({error : "User already exists"}) ;
            return ; 
        }
  
        const salt = await bcrypt.genSalt(10) ; 
        const hashedPassword = await bcrypt.hash(req.body.password , salt) ;

        // console.log(hashedPassword) ; 
        
    const newUser = new user({
        email : req.body.email,
        password : hashedPassword
    })

    // console.log(newUser) ;

    try {
     newUser.save() ;
     const user = {
         user : newUser._id , 
         email : req.body.email
     }
     console.log(user) ;
     res.status(200).send(user) ; 
    }catch(err) {
        res.status(400).send({error : err}) ;
    }

})

router.post('/login' , async (req , res) => {
    const {error} = loginValidation(req.body) ;
    if(error) {
        res.status(400).send({ error : error.details[0].message}) ;
        return ;
    }

    const exists= await user.find({email : req.body.email});
        if(exists.length === 0 ) {
            res.status(400).send({error : "Email or Password is wrong"}) ;
            return ; 
        } 

        const validPassword = await bcrypt.compare(req.body.password , exists[0].password ) ; 
        if(!validPassword) {
            return res.status(400).send({error : "Invalid password"}) ;
        }
        const userInfo = {
            _id : exists[0].id , 
            email : exists[0].email 
        }
        const token = jwt.sign(userInfo, process.env.TOKEN_SECRET)
        const User = {
            id : exists[0]._id , 
            email : exists[0].email , 
            token ,
            back : exists[0].back ,
            bio : exists[0].bio, 
            front : exists[0].front,
            name : exists[0].name 
        }
        res.header('auth-token' , token).send(User) ; 
})



    
        


module.exports = router ; 