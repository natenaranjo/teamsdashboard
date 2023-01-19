import { gql } from '@apollo/client';

export const ADD_MEMBER = gql `
    mutation addMember($first_name: String!, $last_name: String!, $email_address: String!, $phone_number: String!, $zipcode: Int!) {
        addMember(first_name: $first_name, last_name: $last_name, email_address: $email_address, phone_number: $phone_number, zipcode: $zipcode) {
            first_name
            last_name
            email_address
            phone_number
            zipcode
        }
    }
`;