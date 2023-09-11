const Contact=require('../models/contact');

exports.ContactRegistered=async(req,res)=>{
    try{
        const {name,phone}=req.body;
        const contactCreated=await Contact.create({name,phone});
        console.log('contact created',contactCreated);
        return res.redirect('back');
    }catch(error){
        console.log('Error to create a contact');
        return res.redirect('back');
    }

}
exports.getAllData=async(req,res)=>{
    try{
        const contacts=await Contact.find({}).exec();
        res.render('contact',{
            title:"Contact Lists",
            contact_lists:contacts
        })
    }catch(error){
        console.log('Error in fetching data from database');
        res.redirect('back');
    }
}
    exports.deleteContact=async(req,res)=>{
        try{
            let id=req.query.id;
            const deleted=await Contact.findByIdAndDelete(id);
            console.log('Contact deleted',deleted);
            return res.redirect('back');
        }catch(error){
            console.log('Error in deleting the contact',error);
            return res.redirect('back');
        }
    }