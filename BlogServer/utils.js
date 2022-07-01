const blog  = require("./model") ;
const user  = require("./user") ;

const getData = async (req , res) => {
    blog.find({} , async (err , result) => {
    if(err) {
        // console.log(err) ;
        res.send(err) ;
    } else {
        const b = await Promise.all(result.map( async (blog) => {
            const foundUser = await user.findOne({_id : blog.userId}) ;
            const blogObject = blog.toObject() ; 
            blogObject.front = foundUser.front ;
            return blogObject ; 
        })) 

        // console.log('b is ' , b) ; 

        res.json(b) ;
    }
    }) ;

    // await db.collection("blogs").find({}).toArray(function(err , result){
    // if(err) {
    //     console.log(err) ;
    //     res.send(err) ;
    // } else {
    //     res.json(result) ;
    // }
    // }) ;

    // console.log(db.collection("blogs")).find({}) ;
}


module.exports = {
    getData ,
}