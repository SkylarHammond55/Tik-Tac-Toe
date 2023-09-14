const User = require('../models/User'); // Keep this import path
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const resolvers = {
  Mutation: {
    async registerUser(_, { username, email, password }) {
      // Hash the password
      const saltRounds = 10;
      const passwordHash = await bcrypt.hash(password, saltRounds);

      // Create a new user
      const user = await User.create({
        username,
        email,
        passwordHash,
      });

      // Generate a JWT
      const token = jwt.sign({ userId: user.id }, 'your-secret-key', { expiresIn: '1h' });

      return { token, user };
    },

    async loginUser(_, { email, password }) {
      const user = await User.findOne({ where: { email } });

      if (!user) {
        throw new Error('User not found');
      }

      const passwordMatch = await bcrypt.compare(password, user.passwordHash);

      if (!passwordMatch) {
        throw new Error('Invalid password');
      }

      // Generate a JWT
      const token = jwt.sign({ userId: user.id }, 'your-secret-key', { expiresIn: '1h' });

      return { token, user };
    },
  },
};

module.exports = resolvers;


