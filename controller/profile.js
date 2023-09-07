const data=require('../models/Profiles.json');

function getprofile(req,res){
    const profiles=data;
    res.send({profiles});
}

module.exports ={getprofile};