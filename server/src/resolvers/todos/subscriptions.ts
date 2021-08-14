import PubSub from 'relay-mongo-subscriptions/lib/pubsub'

export const subscriptions = {
    todosChanged: {
        subscribe: (parent, args, context, info): AsyncIterator<any> => {
            return PubSub({
              collectionName: 'todos',
              query: {}, // note: if you wanted to query the todo's, you could pick it up from args.query, etc
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
