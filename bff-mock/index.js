const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Dashboard {
    totalSpent: Float!
    currency: String!
    remaining: Float!
  }

  type Query {
    dashboard: Dashboard!
  }
`;

const resolvers = {
    Query: {
        dashboard: () => ({
            totalSpent: 420,
            currency: "EUR",
            remaining: 580,
        }),
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: 8080 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});