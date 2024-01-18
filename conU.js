const modU= require('./model/usermod')
const bcrypt=require('bcrypt')
const nodemailer=require('nodemailer')
const register=async(req,res)=>{

    const sender=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'jo214841@gmail.com',
            pass:'xzwb jwbd qosi lzaz'
        }
    })

    const{name,aadhaar,email,phone, room, address,password,blockname}=req.body
    let exUser;
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

     const uniqueid=`Auroitech_${blockname}_${room} `

    const composemail={
        from:'jo214841@gmail.com',
        to:'lokesh0405062005@gmail.com',
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
        return res.status(404).json({mydata})
       })

     let hide=bcrypt.hashSync(password,10)
    try {
        user=new modU({
        name,
        aadhaar,
        email,
        phone,
        room, 
        address,
        password:hide,
        uniquecode:uniqueid
    })
        user=await user.save()
    } 
    catch (error)
     {
            console.log(error)
    }
   

    return res.status(200).json({user})

}
const signin=async(req,res)=>{

    const {email,password,uniquecode}=req.body
 
    let existuser;
 
    try {
       existuser=await con.findOne({email:email});
    } catch (error) {
       console.log(error)
    }
    if(!existuser){
       return res.status(404).json({message:"user id not found"})
 
    }
    const code=await modU.find({uniquecode:uniquecode})

    if(!code){
        return res.status(404).json({message:"uniquecode is incorroct"})
    }
    const ispasswordcrt=bcrypt.compareSync (password,existuser.password)
    
    if(!ispasswordcrt){
       return res.status(404).json({message:"passsword is incorroct"})
    }
    const token=jwt.sign({id:existuser._id},JWT_KEY,{
       expiresIn:"1hr"
    })
    return res.status(200).json({message:"login success fully",user:existuser,token})
 
  }




exports.register=register
exports.signin=signin