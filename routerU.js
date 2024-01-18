const express=require('express')
const route=express.Router()
const conu=require('./conU')


route.post('/register',conu.register)
route.get('/login',conu.signin)


module.exports=route;