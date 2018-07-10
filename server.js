var express = require('express');
var graphqlHTTP = require('express-graphql');
var mongoose = require('mongoose');
import schema from './schema';

const app = express();
const PORT = 4000;

//Set up default mongoose connection - local
const mongoDB = 'mongodb://127.0.0.1/shelter-app';

mongoose.connect(mongoDB).then(
    () => { console.log('App started successfully') },
    err => {
        console.error('App starting error: ', err.stack);
    }
);

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));
app.listen(PORT, () => console.log(`Now browse to localhost:${PORT}/graphql`));