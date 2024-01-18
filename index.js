const express=require('express')
const mongoose=require('mongoose')

const app=express()

const routeU=require('./routerU')
app.use(express.json())
app.use('/api',routeU)

mongoose.connect('mongodb://127.0.0.1:27017/feci').then(()=>{
    app.listen(2718)
    console.log('db suc')

})