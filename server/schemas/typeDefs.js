const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type Member {
        memberId: ID
        firstName: String
        lastName: String
        emailAddress: String
        phoneNumber: String
        zipCode: Int,
    }

    type Query {
        members: [Member]
        member(firstname: String!, lastName: String!, emailAddress: String!, phoneNumber: String!, zipCode: Int!): Member
    }

    type Mutation {
        addMember(firstName: String!, lastName: String!, emailAddress: String!, phoneNumber: String!, zipCode: Int!): Member
        editMember(memberId: ID!): Member
        removeMember(memberId: ID!): Member
    }
`;

module.exports = typeDefs;