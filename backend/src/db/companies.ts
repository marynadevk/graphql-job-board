import DataLoader from 'dataloader';
import { connection } from './connection.js';
import { ICompanyEntity } from '../interfaces/index.js';

const getCompanyTable = () => connection.table<ICompanyEntity>('company');

class CompanyEntity {

  async getCompany(id: string) {
    return await getCompanyTable().first().where({ id });
  }

  createCompanyLoader() {
    return new DataLoader(async (ids: string[]) => {
      const companies = await getCompanyTable().select().whereIn('id', ids);
      return ids.map((id) => companies.find((company) => company.id === id));
    });
  }
}

export const companyEntity = new CompanyEntity();