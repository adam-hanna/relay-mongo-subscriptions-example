import {
  Collection,
  Db,
  MongoClient,
} from 'mongodb';

export default class DB {
  storeDBURL: string;
  storeDBName: string;

  client: MongoClient | undefined;
  db: Db | undefined;
  collections: { [key: string]: Collection };

  public async connect({ storeDBURL, storeDBName }): Promise<void> {
    this.storeDBName = storeDBName
    this.storeDBURL = storeDBURL

    let opts = {
      useNewUrlParser: true,
      maxPoolSize: 100,
    }

    this.client = new MongoClient(this.storeDBURL, opts)
    await this.client.connect()

    this.db = this.client.db(this.storeDBName);
    this.collections = {
      todos: this.db.collection('todos'),
    }
  }

  public static getInstance(): DB {
    if (!DB.instance_) {
      DB.instance_ = new DB();
    }

    return DB.instance_;
  }

  private static instance_: DB;

  private constructor() {}
}
