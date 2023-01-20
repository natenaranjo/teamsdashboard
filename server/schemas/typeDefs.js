const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type Member {
        memberId: Int!
        first_name: String
        last_name: String
        email_address: String
        phone_number: String
        zipcode: String,
    }

    type Query {
        member: [Member],
        member_search(search: String): [Member]

    }

    type Mutation {
        addMember(first_name: String!, last_name: String!, email_address: String!, phone_number: String!, zipcode: String!): Member
        deleteMember(id: Int!): Member
    }

`;

module.exports = typeDefs;