let express = require('express');
let router = express.Router();
let controller = require('../controllers/controller');

router.post('/', function(req,res){
    controller.postFlower(req,res);
});

router.get('/', (req,res)=>{
    controller.getAllFlowers(req,res);
});

router.delete('/', (req,res)=>{
    controller.getAllFlowers(req,res);
});


module.exports = router;