const mongoose = require('mongoose');
async function connection() {
    try {
        let connection = await mongoose.connect('mongodb://localhost:27017/batch-2');
        console.log("data base connected.... ")
    } catch (error) {
        console.log(error.message,'msg...')
    }
    
}
module.exports= connection;