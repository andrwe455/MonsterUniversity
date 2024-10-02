const mongose = require('mongoose');

const groupsSubjectsSchema = new mongose.Schema({
  schedule: {
    type: {}, 
    required: true
  },
  classroom: {
    type: String,
    required: true
  },
  teacher: {
    type: String,
    required: true,
    default: 'Not assigned'
  },
  subject: {
    type: String,
    required: true
  },
  group: {
    type: String,
    required: true
  },
  semester: {
    type: String,
    required: true
  },
  academicProgram: {
    type: String,
    required: true
  },
});

module.exports = mongose.model('groupsSubjects', groupsSubjectsSchema);