import { createServer } from "@graphql-yoga/node";
import gql from "graphql-tag";

import resolvers from "src/lib/resolvers";
import typeDefs from "src/lib/schema";

const server = createServer({
  schema: {
    typeDefs: gql(typeDefs),
    resolvers,
  },
  endpoint: "/api/graphql",
  // graphiql: false // uncomment to disable GraphiQL
});

export default server;
