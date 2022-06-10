const router = require('express').Router();
const user  = require('../user') ; 


router.put('/profile' , async (req , res) => {
    const data = req.body.data ; 
    const id = req.body.user.id ; 

    const a = await user.findOneAndUpdate({_id : id} , data , {
        new : true
    }) ;
    res.status(200).send(a) ; 
})

module.exports = router ; 
