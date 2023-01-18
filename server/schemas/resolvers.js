const { Member } = require ('../models/Members');

const resolvers = {
    Query: {
        members: async () => {
            return Member.find();
        },
        member: async (parent, { firstName, lastName, emailAddress, phoneNumber, zipCode }) => {
            return User.findOne({ firstName, lastName, emailAddress, phoneNumber, zipCode});
        },
    },

    Mutation: {
        addMember: async (parent, args) => {
            const user = await Member.create(args);
        },
        editMember: async (parent, args) => {
            const user = await Member.update(args);
        },
        removeMember: async (parent, args) => {
            return Member.findOneAndDelete({ _id: memberId });
        }
    },

};

module.exports = resolvers;