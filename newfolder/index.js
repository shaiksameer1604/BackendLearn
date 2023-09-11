const express=require('express');
const path=require('path');
const port=8080;
const app=express();
const db=require('./config/db');
const contact=require('./models/contact');
const contactRouter=require('./router/contact');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));


app.use(express.urlencoded());
app.use('/',contactRouter);
// app.get('/',function(req,res){
//     return res.render('contact',{
//         title:"This is my project"
//     });
// })

app.listen(port,function(err){
    if(err){
        console.log('Error in running the server');
    }
    console.log(`server is running on port: ${port}`);
})