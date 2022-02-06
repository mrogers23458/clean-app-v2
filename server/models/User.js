const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {
        email: String,
        username: String,
        password: String
    },

    //use virtual
    {
        toJSON: {
          virtuals: true,
        },
    }
);

// add checkPass method to userSchema for pasword validation and login
userSchema.methods.checkPass = async function (password) {
    return bcrypt.compare(password, this.password);
  };

  const User = model('User', userSchema);
  
  module.exports = User;