import { createServer as createHTTPServer, Server } from 'http';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { execute, subscribe } from 'graphql';
import { execSchema } from '../../schema';

// Create WebSocket listener server
export const createWSServers = (): Server => {
    const wsServer: Server = createHTTPServer((request, response) => {
        switch (request.url) {
            case '/health':
                response.writeHead(200)
                response.end()

            default:
                response.writeHead(404);
                response.end();
        }
    });

    const wsSubscriptionServer = SubscriptionServer.create(
        {
          schema: execSchema,
          execute,
          subscribe,
        },
        {
          server: wsServer,
          path: '/graphql',
        },
    );

    return wsServer
}
