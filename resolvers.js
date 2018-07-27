import Cat from './models/cat';

export const resolvers = {
    Query: {
        async getCat(root, { _id }) {
            return await Cat.findById(_id);
        },
        async getAllCats() {
            return await Cat.find();
        },
        async getCurrentResidents(root, { resident }) {
            return await Cat.find( { resident: resident });
        }
    },
    Mutation: {
       async createCat(root, { input }) {
           return await Cat.create(input);
       },
        async updateDailyHealth(root, { input }) {
            return await Cat.findOneAndUpdate({"allHealthStats._id": input._id}, { $set: { "allHealthStats.$": input }});
    }},
    //https://www.apollographql.com/docs/graphql-tools/scalars.html
    Date: {
        __parseValue(value) {
            return new Date(value);
        },
        __serialize(value) {
            return value.getFullYear() + '' + ("0" + (value.getMonth()+1)).slice(-2) + '' + ("0" + value.getDate()).slice(-2); // value sent to the client (UI)
        },
        __parseLiteral(ast) {
            if (ast.kind === Kind.INT) {
                return parseInt(ast.value, 10); // ast value is always in string format
            }
            return null;
        }
    }
}