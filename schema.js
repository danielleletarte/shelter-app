import {resolvers} from "./resolvers";
import {makeExecutableSchema} from "graphql-tools/dist/index";

const typeDefs = `
  type Cat {
    _id: ID!
    name: String!
    resident: Boolean!
    age: Int
    image: String
  }
  
  type Query {
    getAllCats: [Cat]
    getCat(_id: ID!): Cat
    getCurrentResidents(resident: Boolean!): [Cat]
  }
  
  input CatInput {
    name: String!
    resident: Boolean!
    age: Int
  }
  
  type Mutation {
    createCat(input: CatInput) : Cat
  }
`;

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;