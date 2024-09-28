const mongoose = require('mongoose')
const subjectSchema = require('./subjectSchema')

const academicProgramSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  academicLevel:{
    enum :['Technical','Technologist','Professional','Doctorate']
  },
  subjects:[subjectSchema],
  description:{
    type:String
  },
  modality:{
    enum:['Presential','Virtual']
  },
  duration:{
    type:Number
  }
})

module.exports = mongoose.model('academicProgram',academicProgramSchema)