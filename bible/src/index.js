import express from 'express';
import bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import mongoose from 'mongoose';
import typeDefs from './schemas';
import resolvers from './resolvers';
import models from './models';

mongoose.Promise = global.Promise;
const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});
const PORT = 3000;
const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({
    schema,
    context: {
        models
    }
}));
app.get('/grapihql', graphiqlExpress({ endpointURL: '/graphql' }));

mongoose.connect('mongodb://localhost:27017/bible').then(
    () => {
        console.log('conectado a Mongo');
        app.listen(PORT, () => {
            console.log('Running GRAPHQL server...');
        })
    }
);