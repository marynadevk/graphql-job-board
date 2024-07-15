import knex from 'knex';
console.log('DB_FILE_PATH:', process.env.DB_FILE_PATH);
export const connection = knex({
  client: 'better-sqlite3',
  connection: {
    filename: process.env.DB_FILE_PATH,
  },
  useNullAsDefault: true,
});
