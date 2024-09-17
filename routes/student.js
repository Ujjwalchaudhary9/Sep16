const express = require('express');
const Studentcontroller = require('../controllers/studentcontroller')
const router = express.Router();
router.post('/add/user',(req,res)=>{
    Studentcontroller.addStudent(req,res)
})
router.get('/users',(req,res)=>{
    Studentcontroller.getStudents(req,res);
})
router.get('/users/:rollno',(req,res)=>{
    Studentcontroller.getStudentsByRollno(req,res);
})
module.exports = router;