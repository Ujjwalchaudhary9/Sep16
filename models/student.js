const mongoose = require('mongoose');
const Schema =mongoose.Schema;
const StudentSchema = new Schema({
    rollno: {type: Number    },
    name: {type: String    },
    fathername: {type: String    },
    adharcardNumber: {type: String    },
    mobileno: {type: String    },
})
module.exports= mongoose.model('student',StudentSchema)
