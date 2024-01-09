let collection = require('../models/flower');

const postFlower = (req,res) => {
    let flower = req.body;
    collection.postFlower(flower, (err,result) => {
        if (!err) {
            res.json({statusCode:201,data:result,message:'success'});
        }
    });
}

const getAllFlowers = (req,res) => {
    collection.getAllFlowers((error,result)=>{
        if (!error) {
            res.json({statusCode:200,data:result,message:'success'});
        }
    });
}



module.exports = {postFlower,getAllFlowers}