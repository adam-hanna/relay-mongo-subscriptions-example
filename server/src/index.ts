require('dotenv').config()
import Watcher from 'relay-mongo-subscriptions/lib/watcher'

import { GraphQLServer } from './server'
import DB from './db'

;(async () => {
  let {
    WS_PORT,
    WS_HOST,
    HTTP_PORT,
    HTTP_HOST,
    MONGO_URL,
    MONGO_DB_NAME,
  } = process.env

  let wsPort = Number(WS_PORT) || 5000
  let wsHost = WS_HOST || 'localhost'
  let httpPort = Number(HTTP_PORT) || 8080
  let httpHost = HTTP_HOST || 'localhost'
  let mongoURL = MONGO_URL || 'mongodb://localhost:27017'
  let mongoDBName = MONGO_DB_NAME || 'todos'

  const db = DB.getInstance()
  await db.connect({
    storeDBURL: mongoURL,
    storeDBName: mongoDBName
  })

  const watcher = Watcher.getInstance()
  watcher.setCollections({
    collections: [db.collections.todos]
  })
  await watcher.openChangeStreams()

  const server = new GraphQLServer({
    wsPort,
    wsHost,
    httpPort,
    httpHost,
  });

  server.listen()
})();
