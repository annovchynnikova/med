const mongoose = require('mongoose')
const doctorSchema = mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  // last_name: {
  //   type: Object,
  //   required: true,
  // },
  // email: {
  //   type: String,
  //   required: true,
  // },
  // phone: {
  //   type: String,
  //   required: true,
  // },
  // password: {
  //   type: String,
  //   required: true,
  // },
  created: {
    type: Date,
    default: Date.now(),
  },
})
const doctor = mongoose.model('doctor', doctorSchema)
module.exports = doctor
