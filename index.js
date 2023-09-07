const express=require('express');
const port=8000;
const app=express();
const userRouters=require('./router/users')
const profileRouters=require('./router/profile');

app.use('/',userRouters);
app.use('/',profileRouters);


app.listen(port,function(err){
    if(err){
        console.log('Error is running on server');
    }
    console.log(`server is running on port: ${port}`);
})
// const sum=require('./add.js');e
// console.log("helloworld");

// const addfn=require('./add.js');
// console.log(addfn(2,3));
// console.log(addfn(400,3));
// const Hotel1=require('./hotel')
// const Offer=require('./offer')
// const pizza =new Hotel1()
// const drinkoffer=new Offer()
// pizza.on('order',(type,size)=>{
//     console.log(`order Received with ${type} of size ${size}`)
//     drinkoffer.drink(size)
// })
// pizza.order('pizza','large')
// pizza.displayOrderCount()