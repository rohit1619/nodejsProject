const express = require('express');
const app = express();
const studentRoute = require('./api/routes/student')
const facultyRoute = require('./api/routes/faculty')

const mongoose = require('mongoose');
const { connected } = require('process');
mongoose.connect('mongodb+srv://vish:hello007@cluster0.6ithjor.mongodb.net/test');

mongoose.connection.on('error',err=>{
    console.log('connection failed');
})
mongoose.connection.on('connected',connected=>{
    console.log('connected with database');
})

app.use('/student',studentRoute)
app.use('/faculty',facultyRoute)

app.use((req,res,next)=>{
    res.status(404).json({
        error:"bad request"
    })
})

module.exports = app;