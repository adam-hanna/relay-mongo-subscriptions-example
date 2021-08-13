import {
  Environment,
  GraphQLResponse,
  Network,
  RecordSource,
  RequestParameters,
  Store,
  Variables,
  Observable,
  Disposable,
} from 'relay-runtime'
import { SubscriptionClient } from 'subscriptions-transport-ws'

const {
  REACT_APP_WS_URL,
  REACT_APP_API_URL
} = process.env

const getSubscriptionClient = (): SubscriptionClient => {
  let reactAppWsUrl = REACT_APP_WS_URL
  if (!reactAppWsUrl) {
    reactAppWsUrl = 'ws://localhost:5000'
  }

  return new SubscriptionClient(`${reactAppWsUrl}/graphql`, {
    reconnect: true,
  });
}

const getSubscriber = (): (request: RequestParameters, variables: Variables) => Observable<GraphQLResponse> | Disposable => {
  const subscriptionClient = getSubscriptionClient()

  return (request: RequestParameters, variables: Variables): Observable<GraphQLResponse> | Disposable => {
    const subscribeObservable = subscriptionClient.request({
      query: request.text as string,
      operationName: request.name,
      variables,
    });

    // Important: Convert subscriptions-transport-ws observable type to Relay's
    // @ts-ignore
    return Observable.from(subscribeObservable);
  };
}

export const fetchQuery = async (request: RequestParameters, variables: Variables): Promise<GraphQLResponse> => {
  let reactAppApiUrl = REACT_APP_API_URL
  if (!reactAppApiUrl) {
    reactAppApiUrl = 'http://localhost:8080'
  }

  const res = await fetch(`${reactAppApiUrl}/graphql`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*',
    },
    body: JSON.stringify({
      query: request.text,
      variables
    })
  })

  return res.json()
}

export const getEnvironment = (): Environment => {
  const subscribe = getSubscriber()

  return new Environment({
    network: Network.create(fetchQuery, subscribe),
    store: new Store(new RecordSource())
  })
}
