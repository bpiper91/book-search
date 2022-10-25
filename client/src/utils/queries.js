import { gql } from '@apollo/client';

export const QUERY_ME = gql`
    query me($id: ID) {
        user(_id: $id) {
            _id
            username
            email
            bookCount
            savedBooks {
                bookId
                title
                authors
                description
                image
                link
            }
        }
    }
`;