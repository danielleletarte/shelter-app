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
            return await Cat.find( { resident: resident })
        }
    },
    Mutation: {
       async createCat(root, { input }) {
           return await Cat.create(input);
       }
    }
}