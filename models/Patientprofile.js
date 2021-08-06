const mongoose = require('mongoose');

const PatientprofileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  job: {
    type: String,
    required: true,
  },
  locationTown: {
    type: String,
    required: true,
  },
 
  phone: {
    type: Array,
  },
  address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  illness: {
    type: String,
  },


});

module.exports = Patientprofile = mongoose.model('patientprofile', PatientprofileSchema);
