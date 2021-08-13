import {
  queries as todoQueries,
  mutations as todoMutations,
  subscriptions as todoSubscriptions
} from './todos'

export const resolvers = {
    Query: {
          ...todoQueries,
      },
    Mutation: {
        ...todoMutations,
    },
    Subscription: {
        ...todoSubscriptions,
    },
}
