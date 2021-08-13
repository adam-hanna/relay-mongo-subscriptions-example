import DB from '../../db'

import {
  Todo
} from './types'

const todos = async (): Promise<Array<Todo>> => {
  const db = DB.getInstance()

  const todos = await db.collections.todos.find().toArray()

  return todos.map(todo => {
    todo.id = todo._id
    return todo
  }) as Array<Todo>
}

export const queries = {
  todos
}
