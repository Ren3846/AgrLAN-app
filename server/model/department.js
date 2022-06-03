const mongoose = require('mongoose');
const { Schema } = mongoose;

const Department = new Schema({
  name: {
    type: String,
    required: [true],
  },
  localitiesIds: {
    type: Array,
    required: [true],
  },
  organizationId: {
    type: String,
    required: [false],
  },
});

module.exports = mongoose.model('Department', Department);
