import { ObjectId } from 'mongodb'

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
    id: insertedId.toHexString(),
    description,
    completed: false,
  }
}

const toggleTodo = async ({ id }: { id: string }): Promise<Todo | undefined> => {
  const db = DB.getInstance()

  const objId = new ObjectId(id)
  let todo = await db.collections.todos.findOne({ _id: objId })
  if (!todo) {
    return
  }

  todo.completed = !todo.completed
  await db.collections.todos.updateOne(
    {
      _id: objId
    },
    {
      $set: {
        ...todo
      }
    }
  )

  todo.id = todo._id
  return todo as Todo
}

export const mutations = {
  newTodo,
  toggleTodo,
}
