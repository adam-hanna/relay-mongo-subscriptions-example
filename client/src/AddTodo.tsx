import React, { useState } from 'react'
import { commitMutation } from "react-relay"
import { useRelayEnvironment } from "react-relay/hooks"
import graphql from "babel-plugin-relay/macro"

const AddTodoMutation = graphql`
  mutation AddTodoMutation(
    $description: String!
  ) {
    newTodo(description: $description) {
      id
      description
      completed
    }
  }
`

export type Props = {

}

export const AddTodo = (_props: Props) => {
  const environment = useRelayEnvironment()
  const [description, setDescription] = useState('')

  return (
    <div className="addTodoWrapper">
      <form
        onSubmit={(e) => {
          e.preventDefault()

          commitMutation(environment, {
            mutation: AddTodoMutation,
            variables: {
              description
            },
            onCompleted: (_response, errors) => {
              if (errors) {
                console.error(errors);
              }

              setDescription('')
            },
            onError: err => console.error(err)
          });
        }}
      >
        <input type="text" value={description} onChange={e => { setDescription(e.target.value) }} placeholder="New Todo" />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}
