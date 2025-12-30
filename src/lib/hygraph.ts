import { GraphQLClient } from 'graphql-request';

const HYGRAPH_ENDPOINT = process.env.HYGRAPH_ENDPOINT!;
const HYGRAPH_TOKEN = process.env.HYGRAPH_TOKEN;

export const hygraph = new GraphQLClient(HYGRAPH_ENDPOINT, {
    headers: {
        Authorization: `Bearer ${HYGRAPH_TOKEN}`,
    },
});
