import DB from '../../db'

import {
  Todo
} from './types'

const newTodo = async ({ description }: { description: string }): Promise<Todo> => {
  const db = DB.getInstance()

  const { insertedId } = await db.collections.todos.insertOne({
    description,
    completed: false
  })

  return {
    _id: insertedId.toHexString(),
    description,
    completed: false,
  }
}

const toggleTodo = async ({ _id }: { _id: string }): Promise<Todo | undefined> => {
  const db = DB.getInstance()

  const todo = await db.collections.todos.findOne({ _id })
  if (!todo) {
    return
  }

  todo.completed = !todo.completed
  await db.collections.todos.updateOne(
    {
      _id
    },
    todo
  )

  return todo as Todo
}

export const mutations = {
  newTodo,
  toggleTodo,
}
