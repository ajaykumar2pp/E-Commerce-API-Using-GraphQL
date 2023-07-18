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
    addProduct(product:AddProduct!):Product
    updateProduct(id:ID!,edits:UpdateProduct!):Product
    deleteProduct(id:ID!):[Product]
}

input AddProduct{
    name:String!,
    price:Float!,
    quantity:Int!
}

input UpdateProduct{ 
    name:String!,
    price:Float!,
    quantity:Int!
}
`