import { jobEntity } from '../../db/jobs.js';

export const Company = {
  jobs: (company) => jobEntity.getJobsByCompany(company.id),
};
