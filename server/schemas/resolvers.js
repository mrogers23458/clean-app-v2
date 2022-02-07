const { AuthenticationError } = require('apollo-server-express');
const {User, Area, Task} = require('../models')
const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        users: async () => {
            return User.find()
        },

        user: async (parent, { id }) => {
            const user = User.findOne( {_id: id} ).populate('areas')
            console.log(user.obj)
            return(user)
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
            const newUser = await User.create({ email, username, password});
            const token = signToken(newUser)

            return { token, newUser }
        },

        login: async (parent, {username, password}) => {
            const loggedIn = await User.findOne({ username });
            console.log('check pass below')

            if (!loggedIn) {
                throw new AuthenticationError('No account with this username found')
                
            }

            const validPass = await loggedIn.isCorrectPassword(password)

            if (!validPass) {

                throw new AuthenticationError('Incorrect password, please try again')
            }

            const token = signToken(loggedIn)

            return { token, loggedIn }
        },

        addArea: async (parent, {id, description, name, tabColor}) => {
            console.log(parent)
            console.log(id + 'id here')
            const area = await Area.create({name, tabColor, description})

            console.log(area)
           const user = await User.findOneAndUpdate(
                { _id: id},
                { $addToSet: {areas: area._id}}
            )

            console.log(user)

            return ( area )
        }
    }
};

module.exports = resolvers