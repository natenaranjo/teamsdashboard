const Member = require ('../models/Member');

const resolvers = {
    Query: {
        member: async () => {
            return Member.findAll();
        }
        
    },
 
    Mutation: {
        addMember: async (_, args) => {
            const member = await Member.create(args);
            return member;
        },
        deleteMember: async (_, { id }) => {
            const member = await Member.findOne({
                where: {
                    memberId: id
                }
            });
            await Member.destroy({where: {
                memberId: id
            }});

            return member;
        }
    }
};

module.exports = resolvers;