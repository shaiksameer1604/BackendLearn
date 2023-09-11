const express=require('express');
const Router=express.Router();
const controller=require('../controller/controller')
Router.get('/',controller.getAllData);
Router.post('/create-contact',controller.ContactRegistered);
Router.get('/delete-contact',controller.deleteContact);
module.exports=Router;