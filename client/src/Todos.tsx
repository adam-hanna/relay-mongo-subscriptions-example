import React from 'react'
import { useRelayEnvironment } from 'react-relay/hooks'
import { commitMutation } from "react-relay"
import graphql from 'babel-plugin-relay/macro'
import {
  QueryRenderer,
} from 'react-relay'
import {
  TodosQueryResponse
} from './__generated__/TodosQuery.graphql'

const CompleteTodoMutation = graphql`
  mutation TodosToggleTodoMutation(
    $_id: String!
  ) {
    toggleTodo(_id: $_id) {
      _id
      description
      completed
    }
  }
`

export type Props = {

}

export const Todos = ({

}: Props) => {
  const environment = useRelayEnvironment()

  const toggleTodo = (_id: string) => {
    commitMutation(environment, {
      mutation: CompleteTodoMutation,
      variables: {
        _id
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
    <>
      <QueryRenderer
        environment={environment}
        query={graphql`
          query TodosQuery {
            todos {
              _id
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
                            toggleTodo(todo._id)
                          }}
                        >
                          Toggle Complete
                        </button>
                      </td>
                      <td>{todo.description}</td>
                      <td>{todo.completed}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          )
        }}
      />
    </>
  )
}
