const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
dotenv.config()
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/v1',require('./routes/authRoute'))

mongoose.connect('mongodb://127.0.0.1:27017/rentcar')
.then(()=>{console.log('connected to db')})
.catch(err=>{
    console.log('error-'+err)
})

app.listen(process.env.PORT,()=>{
    console.log('server listeneing on port ' + process.env.PORT)
})