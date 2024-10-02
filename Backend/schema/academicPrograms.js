const mongoose = require('mongoose')
const subjectSchema = require('./subjectSchema')

const academicProgramSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  academicLevel:{
    type:String,
    enum :['Technical','Technologist','Professional','Master','Doctorate']
  },
  description:{
    type:String
  },
  modality:{
    type:String,
    enum:['Presential','Virtual']
  },
  duration:{
    type:String
  },
  professionalProfile:{
    type:String
  },
  workField:{
    type:String
  },
  id:{
    type:String,
    required:true
  },
})

module.exports = mongoose.model('academicProgram',academicProgramSchema)