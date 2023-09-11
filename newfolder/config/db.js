const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://sameer_33:Sameer123@cluster0.ovd0eo7.mongodb.net/');

const db=mongoose.connection;

db.on('error',(error)=>{
    console.log('error in connecting with database')});

db.once('open',()=>{
    console.log('successfuly connected to the database');
})