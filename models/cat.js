import mongoose from 'mongoose';
import dailyStats from './dailyStats';

//Each model maps to a collection of documents in the MongoDB database. The documents will contain the fields/schema types defined in the model Schema
//https://medium.com/@haidermalik504/building-apis-with-graphql-nodejs-and-mongoose-64655c062dd2
const Schema = mongoose.Schema;

const CatSchema = new Schema({
    name: { type: String, required: true },
    resident: { type: Boolean, required: true },
    age: { type: Number, required: false },
    imageSmall: { type: String, required: false},
    imageLarge: { type: String, required: false},
    sex: { type: String, enum: ['M', 'F'], required: true },
    allHealthStats: [ dailyStats.schema ]
})

export default mongoose.model('cat', CatSchema);