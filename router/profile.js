const express=require('express');
const router=express.Router();
const profileController=require('../controller/profile');

router.get('/users',profileController.getprofile);

module.exports=router;