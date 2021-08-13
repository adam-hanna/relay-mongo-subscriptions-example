import { createServer as createHTTPServer, Server } from 'http';
import * as express from 'express';
import { graphqlHTTP } from 'express-graphql';
import * as cors from 'cors'

import { schema } from '../../data/schema';
import { resolvers } from '../../resolvers';

const app = express()
app.use(cors())

// Setup GraphQL endpoint
app.use('/graphql', (req, res) => {
    const middleware = graphqlHTTP({
        schema,
        rootValue: {
            ...resolvers.Query,
            ...resolvers.Mutation,
            ...resolvers.Subscription,
        },
        graphiql: true,
        pretty: true,
    });

    void middleware(req, res);
});

// setup health check
app.use(
    '/health',
    (req, res, next) => {
        res.sendStatus(200);
        next();
    }
)

export const createHTTPServers = (): Server => {
    return createHTTPServer(app);
}
