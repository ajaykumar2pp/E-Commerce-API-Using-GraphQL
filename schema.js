export const typeDefs=`#graphql
type Product{
    id:ID!
    name:String!
    price:Float!
    quantity:Int!
}

type Query {
    products:[Product]
   product(id:ID!):Product
}
type Mutation{
    deleteProduct(id:ID!):[Product]
}
`