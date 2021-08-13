import React, { useState, useEffect } from 'react'
import { useRelayEnvironment } from 'react-relay/hooks'
import {
  RecordSourceSelectorProxy,
  SelectorData
} from 'relay-runtime'
import graphql from 'babel-plugin-relay/macro'
import {
  commitMutation,
  Disposable,
  QueryRenderer,
} from 'react-relay'

import GetTodosChangedSubscription from './subscription'
import {
  TodosQueryResponse
} from './__generated__/TodosQuery.graphql'

const CompleteTodoMutation = graphql`
  mutation TodosToggleTodoMutation(
    $id: String!
  ) {
    toggleTodo(id: $id) {
      id
      description
      completed
    }
  }
`
const genRandomString = (): string => {
 return Math.random().toString(36).substring(7)
}

export type Props = {

}

export const Todos = (_props: Props) => {
  const environment = useRelayEnvironment()

  const [foo, setFoo] = useState(genRandomString())
  const [disposable, setDisposable] = useState<Disposable | undefined>(
    undefined
  );

  useEffect(() => {
    if (disposable?.dispose) {
      disposable.dispose();
    }

    const TodosSubscription = GetTodosChangedSubscription(environment);
    const tmpDispoable = TodosSubscription(
      // @ts-ignore
      response => {
        console.log('todosChanged response', response)
      },
      // @ts-ignore
      (error: Error) => {
        console.error(`An error occurred in the subscription:`, error)
        setFoo(genRandomString());
      },
      () => {
        // note: completed...
        console.log('subscription is completed')
      },
      (store: RecordSourceSelectorProxy, data: SelectorData) => {
        console.log('data', data)
        const {
          todosChanged
        } = data as {
          todosChanged: Array<{
            doc: {
              _id: string;
              description: string;
              completed: boolean;
            };
            operationType: string;
          }>
        }

        if(!todosChanged || !todosChanged.length) {
          return
        }

        todosChanged.forEach(({
            doc: { _id, description, completed },
            operationType
        }) => {
          if (operationType === 'insert') {
            let newLinkedRecord = store.get(_id);
            if (!newLinkedRecord) {
              newLinkedRecord = store.create(_id, "Todo")
              newLinkedRecord.setValue(completed, "completed")
              newLinkedRecord.setValue(description, "description")
              newLinkedRecord.setValue(_id, "id")
            }

            let linkedRecords = store
              .getRoot()
              .getLinkedRecords("todos", {});

            if (!linkedRecords) {
              linkedRecords = []
            }
            linkedRecords.push(newLinkedRecord)

            store
              .getRoot()
              .setLinkedRecords([...linkedRecords], "todos", {});
          } else {
            const s = store.get(_id)
            if (!s) {
              // note: create record?
              console.log('no store record with id: ', _id)
              return
            }

            s.setValue(description, 'description')
            s.setValue(completed, 'completed')
          }
        });
      },
      {
        // note: variables go here...
      }
    );
    setDisposable(tmpDispoable);

    return () => {
      if (disposable?.dispose) {
        disposable.dispose();
      }
    }
  // eslint-disable-next-line
  }, [foo])

  const toggleTodo = (id: string) => {
    commitMutation(environment, {
      mutation: CompleteTodoMutation,
      variables: {
        id
      },
      onCompleted: (_response, errors) => {
        if (errors) {
          console.error(errors);
        }
      },
      onError: err => console.error(err)
    });
  }

  return (
    <div className="todosWrapper">
      <QueryRenderer
        environment={environment}
        query={graphql`
          query TodosQuery {
            todos {
              id
              description
              completed
            }
          }
        `}
        variables={{}}
        render={({ error, props }) => {
          if (error) {
            console.error(error)
            return <>Error: {error.message}</>
          }

          if (!props) {
            return <>Loading...</>
          }

          return (
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>
                    Description
                  </th>
                  <th>
                    Completed
                  </th>
                </tr>
              </thead>
              <tbody>
                {(props as TodosQueryResponse).todos.map((todo, idx) => {
                  return (
                    <tr
                      key={idx}
                    >
                      <td>
                        <button
                          onClick={() => {
                            toggleTodo(todo.id)
                          }}
                        >
                          Toggle Complete
                        </button>
                      </td>
                      <td>{todo.description}</td>
                      <td>{String(todo.completed)}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          )
        }}
      />
    </div>
  )
}
