import graphql from 'babel-plugin-relay/macro'
import {
  Disposable,
  requestSubscription,
  Environment,
} from 'react-relay';

const subscription = graphql`
  subscription subscriptionTodosChangedSubscription {
    todosChanged {
      doc {
        _id
        description
        completed
      }
      operationType
    }
  }
`;

// @ts-ignore
const subscriber = (environment: Environment): ((onNext, onError, onCompleted, updater, variables) => Disposable) => {
  return (onNext, onError, onCompleted, updater, variables): Disposable => {
    const subscriptionConfig = {
      subscription,
      variables,
      onError,
      onNext,
      onCompleted,
      updater
    }

    return requestSubscription(
      environment,
      subscriptionConfig
    )
  }
}

export default subscriber
