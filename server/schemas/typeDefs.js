const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type Member {
        memberId: ID
        firstName: String
        lastName: String
        emailAddress: String
        phoneNumber: String
        zipCode: Number,
    }

    type Query {
        members: [Member]
        member(firstname: String!, lastName: String!, emailAddress: String!, phoneNumber: String!, zipCode: Number!): Member
    }

    type Mutation {
        addMember(firstName: String!, lastName: String!, emailAddress: String!, phoneNumber: String!, zipCode: Number!): Member
        removeMember(memberId: ID!): Member
    }
`;

module.exports = typeDefs;