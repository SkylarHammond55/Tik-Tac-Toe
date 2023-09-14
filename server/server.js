const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');

// Create an Express.js server
const app = express();

// Create an Apollo Server instance and link it to Express
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    // You can use the context function to handle authentication if needed.
    // For example, you can decode JWT tokens and attach user information to the request.
    return {
      // Add any authentication or user-related logic here
    };
  },
});

server.applyMiddleware({ app });

// Connect to your MongoDB database
mongoose.connect('mongodb+srv://root:root@cluster0.ha6mlh6.mongodb.net/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


