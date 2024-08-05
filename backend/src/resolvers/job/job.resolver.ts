import { toIsoDate } from '../../utils/toIsoDate.js';

export const Job = {
  company: (job, _args, { companyLoader }) => {
    return companyLoader.load(job.companyId);
  },
  date: (job) => toIsoDate(job.createdAt),
};
