const express = require('express');
const connection = require('./connection');
const student = require('./routes/student');
const app = express();
app.use(express.json());
connection();
app.use(student);
app.listen(3000,(err)=>{
    if (err) {
        console.log('ERROR');
    } else {
       console.log('Server is  running on 3000'); 
    }
})