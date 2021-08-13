import DB from '../../db'

import {
  Todo
} from './types'

const todos = async (): Promise<Array<Todo>> => {
  const db = DB.getInstance()

  return db.collections.todos.find().toArray()
}

export const queries = {
  todos
}
