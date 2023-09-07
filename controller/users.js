const data=require('../models/Data.json');

// function getUsers(req,res){
//     const users=data;
//     res.send({users});
// }

// module.exports ={getUsers};

exports.registerController=async(req,res,next)=>{
    try{
        const{username,email,password}=req.body;
        const existingEmail=await data.findOne({email});
                if(existingEmail){
                    return res.send("Error: The email id is already registered.Please signin");
                }
                const user=await data.create({username,email,password});
                this.sendToken(user,201,res)
    }catch(error){
        res.sendToken(error,500);
    }
}

//login controller email,password
exports.loginController=async(req,res)=>{
    try{
        const{email,password}=req.body;
        // const existingEmail=await data.findOne({email});
        // const successLogin=existingEmail.password==password;
        // if(successLogin){
        //     res.send("Successfully logedin");
        //     this.sendToken(user,200,res);
        // }
        // else{
        //     res.send("Please enter correct Email Address");
        // }
        if(!email||!password){
            return res.send("Please provide email id and password");
        }
        const user =await data.findOne({email});
        if(!user){
            return res.send("Invalid credentials",400);
        }
        const passwordMatch=await user.matchPassword({password});
        if(!passwordMatch){
            return res.send('Invalid credentials',400);
        }
        this.sendToken(user,200,res);
    }catch(error){
        res.sendToken(error,500);
    }
}

//201 sucess
//404 error
//500 internal server

//using Promises

//Register Control
exports.registerController=(req,res)=>{
    const {username,email,password}=req.body;
    data.findOne({email})
    .then(existingEmail=>{
        if(existingEmail){
            return res.send("Error:Mail id id already present");
        }
        return data.create({username,email,password})
    })
    .then(user=>{
        this.sendToken(user,201,res);
    })
    .catch(error=>{
        res.sendToken(error,500);
    })
}

//Login Control
exports.loginController = (req, res) => {
    const { email, password } = req.body;
    
    // Search for the user in the database based on the provided email
    data.findOne({ email })
      .then(user => {
        if (!user) {
          // If the user doesn't exist in the database
          return res.status(404).send("Error: User not found");
        }
  
        // Check if the provided password matches the user's password
        if (user.password !== password) {
          // If the password doesn't match
          return res.status(401).send("Error: Invalid password");
        }
  
        // User found and password is correct, generate and send the authentication token
        this.sendToken(user, 200, res);
      })
      .catch(error => {
        res.status(500).send("Error: " + error);
      });
  };
  