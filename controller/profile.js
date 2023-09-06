const data=require('../models/Profiles.json');

function getprofile(req,res){
    const Profiles=data;
    res.send({Profiles});
}

module.exports ={getprofile};