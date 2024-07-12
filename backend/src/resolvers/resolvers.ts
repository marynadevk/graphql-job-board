import { companyEntity } from '../db/companies.js';
import { jobEntity } from '../db/jobs.js';
import { Resolvers } from '../generated/schema.js';
import { notFoundError, unauthorizedError } from '../utils/errorHandlers.js';
import { toIsoDate } from '../utils/toIsoDate.js';

export const resolvers: Resolvers = {
  Query: {
    company: async (_root, { id }) => {
      const company = await companyEntity.getCompany(id);
      if (!company) {
        throw notFoundError('No Company found with id ' + id);
      }
      return company;
    },
    job: async (_root, { id }) => {
      const job = await jobEntity.getJob(id);
      if (!job) {
        throw notFoundError('No Job found with id ' + id);
      }
      return job;
    },
    jobs: async (_root, { limit, offset }) => {
      const items = await jobEntity.getJobs(limit, offset);
      const totalCount = await jobEntity.countJobs();
      return { items, totalCount };
    },
  },

  Mutation: {
    createJob: (_root, { input: { title, description } }, { user }) => {
      if (!user) {
        throw unauthorizedError('Missing authentication');
      }
      return jobEntity.createJob({ companyId: user.companyId, title, description });
    },

    deleteJob: async (_root, { id }, { user }) => {
      if (!user) {
        throw unauthorizedError('Missing authentication');
      }
      const job = await jobEntity.deleteJob(id, user.companyId);
      if (!job) {
        throw notFoundError('No Job found with id ' + id);
      }
      return job;
    },

    updateJob: async (_root, { input: { id, title, description } }, { user }) => {
      if (!user) {
        throw unauthorizedError('Missing authentication');
      }
      const job = await jobEntity.updateJob({ id, companyId: user.companyId, title, description });
      if (!job) {
        throw notFoundError('No Job found with id ' + id);
      }
      return job;
    },
  },

  Company: {
    jobs: (company) => jobEntity.getJobsByCompany(company.id),
  },

  Job: {
    company: (job, _args, { companyLoader }) => {
      return companyLoader.load(job.companyId);
    },
    date: (job) => toIsoDate(job.createdAt),
  },
};


