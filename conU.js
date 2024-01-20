const modU= require('../model/usermod')
const bcrypt=require('bcrypt')
const nodemailer=require('nodemailer')
const sermodu=require('../model/sermod')
const expmod=require('../model/expensemod')
const register=async(req,res)=>{

    const sender=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'jo214841@gmail.com',
            pass:'xzwb jwbd qosi lzaz'
        }
    })

    const{name,aadhaar,email,phone,room, address,password,blockname}=req.body
    let exUser;
    let user;
    try{
        exUser=await modU.findOne({email:email})
    }
    catch(err){
        console.log(err)
    }
    if(exUser)
    {
        return res.status(404).json({message:'exist'})
    }


    let exroom= await modU.findOne({room:room})

    if(exroom){
        return res.status(404).json({message:'room already booked'})
    }

     const uniqueid=`Auroitech${blockname}${room}`

    
     const composemail={
        from:'jo214841@gmail.com',
        to:'sjhruthran28@gmail.com',
        subject:'welcome to Auroitech',
        text:`this is you unique id please keep secert this code  ${uniqueid} `
    }
   

    await sender.sendMail(composemail,(error,info)=>{
  
        if(error){
            console.log(error.message)
            return;
        }
        console.log('send sucessfully')
        
        console.log(info.messageId)
       })
     
    try {
        user=new modU({
        name,
        aadhaar,
        email,
        phone,
        room, 
        address,
        password,
        uniquecode:uniqueid,
        blockname
    })
        user=await user.save()
    } 
    catch (error)
     {
            console.log(error)
    }
  
    return res.status(200).json("success")

}
const login=async(req,res)=>{

 const{uniquecode}=req.body

 let user;

 try {
    user=await modU.find({uniquecode:uniquecode})

 } catch (error) {
  
    console.log(error)
    
 }

 if(!user){
    return res.json("unique id invalid")
 }

 return res.status(200).json("success")




}

  const service=async(req,res)=>{

   
    const{tanantname,roomnum,typeofcomplaint,complaintdeatails}=req.body


     let user;

    let crctroom=await modU.findOne({room:roomnum})
 
     if(!crctroom){
 
        return res.status(404).json({message:"room is incorrect"})
     }

     let curenntuser;

     try {
        
        curenntuser=new sermodu({

            tanantname,roomnum,typeofcomplaint,complaintdeatails,repairstatus:true
        })

        curenntuser=await curenntuser.save();
     } catch (error) {
        console.log(error)
     }



     return res.status(200).json(curenntuser)


  }

  const resolvethereparis=async()=>{

    const sender=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'jo214841@gmail.com',
            pass:'xzwb jwbd qosi lzaz'
        } 
    })
    const composemail={
        from:'jo214841@gmail.com',
        to:'lokesh0405062005@gmail.com',
        subject:'welcome to Auroitech',
        text:`this is you unique id please keep secert this code `
    }
    await sender.sendMail(composemail,(error,info)=>{
  
        if(error){
            console.log(error.message)
            return;
        }
        console.log('send sucessfully')
        
        console.log(info.messageId)
       })
      
       await expmod.updateOne({repairstatus:false})

  }
  


exports.register=register
exports.login=login
exports.service=service