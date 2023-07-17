import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// Database
import database from "./database.js";

//Schema Type
import { typeDefs } from "./schema.js";

//Resolver
const resolvers = {
  Query: {
    // all product details
    products() {
      return database.products;
    },
    // single product details
    product(_, args) {
      return database.products.find((product) => product.id === args.id);
    },
  },
  Mutation: {
    deleteProduct(_, args) {
        database.products =database.products.filter((product)=>product.id !== args.id)
        return database.products
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, { listen: { port: 5000 } });

console.log(`🚀  Server ready at: ${url}`);
