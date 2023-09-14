const mongoose = require('mongoose');

// Define the User schema and model
const userSchema = new mongoose.Schema({
  // Define your user schema fields here
});

// Export the User model
module.exports = mongoose.model('User', userSchema);

