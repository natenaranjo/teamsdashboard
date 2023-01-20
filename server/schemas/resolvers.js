const Member = require ('../models/Member');

const resolvers = {
    Query: {
        member: async () => {
            return Member.findAll();
        }
        
    },
 
    Mutation: {
        addMember: async (_, first_name, last_name, email_address, phone_number, zipcode) => {
            const member = await Member.create(first_name, last_name, email_address, phone_number, zipcode);
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