const { Member } = require ('../models/Members');

const resolvers = {
    Query: {
        members: async() => await Member(),
    },

    Mutation: {
        addMember: async (parent, args) => {
            const user = await Member.create(args);
        },
        editMember: async (parent, args) => {
            const user = await Member.update(args);
        },
        removeMember: async (parent, args) => {
            return Member.findOneAndDelete({ _id: ID });
        }
    },

};

module.exports = resolvers;