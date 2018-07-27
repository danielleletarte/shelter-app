import {resolvers} from "./resolvers";
import {makeExecutableSchema} from "graphql-tools/dist/index";

const typeDefs = `
  scalar Date
  
  type DailyStats {
    _id: ID!
    date: Date!
    eat: Boolean
    urinate: Boolean
    poo: Boolean
    notes: String
  }
  
  type Cat {
    _id: ID!
    name: String!
    resident: Boolean!
    age: Int
    imageSmall: String
    imageLarge: String
    sex: String!
    allHealthStats: [ DailyStats ] 
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
    sex: String!
  }
  
  input DailyHealthInput {
    _id: ID!
    date: String
    eat: Boolean
    urinate: Boolean
    poo: Boolean
    notes: String
  }
  
  type Mutation {
    createCat(input: CatInput) : Cat
    updateDailyHealth(input: DailyHealthInput) : Cat
  },
`;

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;