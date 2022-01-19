const express = require("express")
const carRouter = require('./cars/cars-router')
const server = express()

// DO YOUR MAGIC
server.use(express.json())
server.use('/api/car', carRouter)


// http get :8000/hello
server.use('/hello', (req, res)=>{
    // res.send("Hello World!!!!")
    res.status(200).json('hello world!!!!!!')
})
// http get :8000
server.use('*', (req, res)=>{
    res.status(404).json({
        message: 'not fount'
    })
})

module.exports = server
