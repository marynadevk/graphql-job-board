import knex from 'knex';
import { envConfig } from '../config.js';
console.log('DB_FILE_PATH:', envConfig.dbFilePath);
export const connection = knex({
  client: 'better-sqlite3',
  connection: {
    filename: envConfig.dbFilePath,
  },
  useNullAsDefault: true,
});
