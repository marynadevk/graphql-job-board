import { connection } from './connection.js';
import { IUserEntity } from '../interfaces/index.js';

const getUserTable = () => connection.table<IUserEntity>('user');

class UserEntity {
  async getUser(id: string) {
    return await getUserTable().first().where({ id });
  }

  async getUserByEmail(email: string) {
    return await getUserTable().first().where({ email });
  }
};

export const userEntity = new UserEntity();