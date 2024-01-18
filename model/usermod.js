const mongoose=require('mongoose')

const Schema=mongoose.Schema

const userSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    aadhaar:{
        type:String,
        required:true

    },
    phone:{
        type:String,
        required:true
    },
    room:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    uniquecode:{
        type:String,
        required:true
    },
    blockname:{
       type: String,
       required:true
    }
})

module.exports=mongoose.model('userData',userSchema)