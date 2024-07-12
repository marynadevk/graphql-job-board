import { getCompany } from '../db/companies.js';
import { getJobs, getJob, getJobsByCompany } from '../db/jobs.js';

export const resolvers = {
  Query: {
    company: (_, { id }) => getCompany(id),
    job: (_, { id }) => getJob(id),
    jobs: () => getJobs(),
  },

  Job: {
    company: (job) => getCompany(job.companyId),
    date: (job) => new Date(job.createdAt).toISOString(),
  },

  Company: {
    jobs: (company) => getJobsByCompany(company.id),
  }
}

