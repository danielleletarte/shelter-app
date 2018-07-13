import {resolvers} from "./resolvers";
import {makeExecutableSchema} from "graphql-tools/dist/index";
import { GraphQLDate } from 'graphql-iso-date';

const typeDefs = `
  scalar Date
  
  type DailyStats {
    _id: ID!
    date: Date!
    eat: Boolean
    urinate: Boolean
    poo: Boolean
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
    getAllStatsForCat(_id: ID!): [ DailyStats ]
  }
  
  input CatInput {
    name: String!
    resident: Boolean!
    age: Int
    sex: String!
  }
  
  type Mutation {
    createCat(input: CatInput) : Cat
  },
`;

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;