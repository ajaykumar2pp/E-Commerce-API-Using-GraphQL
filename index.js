import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { generate } from "shortid";
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
    addProduct(_,args){
     let product = {...args.product , id:generate()}
     database.products.push(product);
     return product
    },
    updateProduct(_,args){
     database.products = database.products.map((p)=>{
        if(p.id === args.id){
          return {...p, ...args.edits}
        }
        return p
      })
      return database.products.find((p)=>p.id === args.id)
    }
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, { listen: { port: 5000 } });

console.log(`🚀  Server ready at: ${url}`);
