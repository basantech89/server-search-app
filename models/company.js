const mongoose = require('mongoose');

const { Schema } = mongoose;

const companySchema = new Schema({
  id: {
    type: 'String',
    required: true,
  },
  name: {
    type: 'String',
    required: true,
  },
});

const Companies = mongoose.model('Company', companySchema);
module.exports = Companies;
