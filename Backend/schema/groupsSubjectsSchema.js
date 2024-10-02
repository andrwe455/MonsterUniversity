const mongose = require('mongoose');

const groupsSubjectsSchema = new mongose.Schema({
  schedule: {
    type: String,
    required: true
  },
  classroom: {
    type: String,
    required: true
  },
  teacher: {
    type: String,
    required: true
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
});

module.exports = mongose.model('groupsSubjects', groupsSubjectsSchema);