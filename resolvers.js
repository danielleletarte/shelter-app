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
       }
    },
    //https://www.apollographql.com/docs/graphql-tools/scalars.html
    Date: {
        __parseValue(value) {
            new Date(value);
            return date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate();// value from the client (UI)
        },
        __serialize(value) {
            return (value.getMonth()+1) + '-'+value.getDate() + '-'+value.getFullYear(); // value sent to the client (UI)
        },
        __parseLiteral(ast) {
            if (ast.kind === Kind.INT) {
                return parseInt(ast.value, 10); // ast value is always in string format
            }
            return null;
        }
    }
}