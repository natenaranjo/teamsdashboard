import { gql } from '@apollo/client';

export const QUERY_MEMBERS = gql `
    query member {
        member {
            memberId
            first_name
            last_name
            email_address
            phone_number
            zipcode
        }
    }
`;