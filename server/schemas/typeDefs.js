const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type Member {
        memberId: Int!
        first_name: String
        last_name: String
        email_address: String
        phone_number: String
        zipcode: Int,
    }

    type Query {
        member: [Member]
    }

    type Mutation {
        addMember(first_name: String!, last_name: String!, email_address: String!, phone_number: String!, zipcode: Int!): Member
        removeMember(id: Int!): Member
    }

`;

module.exports = typeDefs;