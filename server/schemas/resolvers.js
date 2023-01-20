const {Op} = require("sequelize");
const Member = require ('../models/Member');

const resolvers = {
    Query: {
        member: async () => {
            return Member.findAll();
        },
        member_search: async (_, args, context, info) => {
            // search Member using this search
            const search = args.search;
            const search_list = search.split(/[ ,]+/)

            console.log("member_search", search);
            console.log("split", search_list)

            return Member.findAll({
                where: {
                    [Op.or]: [
                        {
                            first_name: {
                                [Op.like]: `%${search}%`
                            }
                        },
                        {
                            last_name: {
                                [Op.like]: `%${search}%`
                            }
                        },
                        {
                            email_address: {
                                [Op.like]: `%${search}%`
                            }
                        },
                        {
                            phone_number: {
                                [Op.like]: `%${search}%`
                            }
                        },
                        {
                            zipcode: {
                                [Op.like]: `%${search}%`
                            }
                        },
                        {
                            first_name: {
                                [Op.in]: search_list
                            }
                        },
                        {
                            last_name: {
                                [Op.in]: search_list
                            }
                        },
                        {
                            email_address: {
                                [Op.in]: search_list
                            }
                        },
                        {
                            phone_number: {
                                [Op.in]: search_list
                            }
                        },
                        {
                            zipcode: {
                                [Op.in]: search_list
                            }
                        }
                    ]
                    
                }
            });
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