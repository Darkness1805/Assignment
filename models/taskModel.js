const { stat } = require('fs');
const mongoose = require('mongoose');


const TaskSchema = mongoose.Schema({ 
     title:{type:String,required:[true,'Please provide a title']},
     description:{type:String},
     Tstatus:{type:String,default:'pending'}
    },{
        timestamps:true,
    })

    module.exports = mongoose.model('Task', TaskSchema)