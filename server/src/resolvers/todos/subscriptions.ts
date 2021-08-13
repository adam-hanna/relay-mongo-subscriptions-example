import PubSub from 'relay-mongo-subscriptions/pubsub'

export const subscriptions = {
    todosChanged: {
        subscribe: (parent, args, context, info): AsyncIterator<any> => {
            return PubSub({
              collectionName: 'todos',
              query: args.query,
              delay: 500,
              leading: false,
              trailing: true,
            })
        },
        // @ts-ignore
        resolve: payload => {
            return payload
        }
    }
}
