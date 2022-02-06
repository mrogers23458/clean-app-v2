const { AuthenticationError } = require('apollo-server-express');
const {User, Area, Task} = require('../models')
const {signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        users: async () => {
            return User.find()
        },

        user: async (parent, { id }) => {
            return User.findOne( id ).populate('areas')
        },

        me: async(parent, args, context) => {
            if (context.user) {
                return User.findOne({_id: context.user.id}).populate('areas')
            }
        },

        areas: async (parent, { id }) => {
            const params = id ? { id } : {};
            return Area.findById(params).sort({createdAt: -1})
        },

        area: async (parent, { id }) => {
            return Area.findOne( { _id: id })
        }
    },

    Mutation: {
        register: async (parent, { email, username, password }) => {
            const user = await User.create({ email, username, password});
            const token = signToken(user)

            return { token, user }
        },

        login: async (parent, {username, password}) => {
            const user = await User.findOne({ username });
            console.log(user)
            console.log(password)
            console.log('check pass below')

            if (!user) {
                throw new AuthenticationError('No account with this username found')
                
            }

            const validPass = await user.isCorrectPassword(password)

            if (!validPass) {
                console.log(user)
                console.log(password)
                throw new AuthenticationError('Incorrect password, please try again')
            }

            const token = signToken(user)

            return { token, user }
        },
    }
};

module.exports = resolvers