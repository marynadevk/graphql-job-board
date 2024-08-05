import DataLoader from 'dataloader';
import { ICompanyEntity, IUserEntity } from './index.js';

export interface IResolverContext {
  companyLoader: DataLoader<string, ICompanyEntity, string>;
  user?: IUserEntity;
};
