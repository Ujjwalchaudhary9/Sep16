const Student = require('../models/student');
async function addStudent(req, res) {
    try {
        console.log(req.body, 'req body')
        let student = new Student(req.body);
        await student.save();
        console.log('data saved...');
        res.end('added..........')
    } catch (error) {
        console.log('ERROR');

    }
}
async function getStudents(req,res) {
    try {
        let students = await Student.find({});
        console.log(students,'students');
        res.send(students);
    } catch (error) {
        
    }
}
async function getStudentsByRollno(req,res) {
    try {
        let rollno = parseInt(req.params.rollno);
        console.log(rollno,'rollno')
        let student = await Student.findOne({rollno: rollno });
        console.log(student,'students');
        res.send(student);
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    addStudent,
    getStudents,
    getStudentsByRollno
}