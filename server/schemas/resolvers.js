const { AuthenticationError } = require('apollo-server-express');
const { User, Book } = require('../models');
// add auth util to sign token

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            // logic
        }    
    },
    Mutation: {
        login: async (parent, { email, password }) => {
            // logic
        },
        addUser: async (parent, { username, email, password }, context) => {
            // logic
        },
        saveBook: async (parent, args, context) => {
            const { bookId, authors, description, title, image, link } = args;
            
            // logic
        },
        removeBook: async (parent, { bookId }, context) => {
            // logic
        }
    }
};

module.exports = resolvers;