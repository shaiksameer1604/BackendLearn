const express=require('express');
const router=express.Router();
const profileController=require('../controller/profile');

router.get('/profile',profileController.getprofile);

module.exports=router;