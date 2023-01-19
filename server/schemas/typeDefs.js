const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type Member {
        _id: ID!
        first_name: String
        last_name: String
        email_address: String
        phone_number: String
        zipcode: Int,
    }

    type Query {
        members: [Member]
        member(first_name: String!, last_name: String!, email_address: String!, phone_number: String!, zipCcde: Int!): Member
    }

    type Mutation {
        addMember(first_name: String!, last_name: String!, email_address: String!, phone_number: String!, zipcode: Int!): Member
        editMember(_id: ID!): Member
        removeMember(_id: ID!): Member
    }
`;

module.exports = typeDefs;