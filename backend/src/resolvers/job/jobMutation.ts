import { jobEntity } from '../../db/jobs.js';
import { notFoundException, unauthorizedError } from '../../utils/errorHandlers.js';
import { errorMessages } from '../../utils/errorMessages.js';

export const JobMutation = {
  createJob: (_root, { input: { title, description } }, { user }) => {
    if (!user) {
      throw unauthorizedError(errorMessages.UNAUTHORIZED);
    }
    return jobEntity.createJob({ companyId: user.companyId, title, description });
  },

  deleteJob: async (_root, { id }, { user }) => {
    if (!user) {
      throw unauthorizedError(errorMessages.UNAUTHORIZED);
    }
    const job = await jobEntity.deleteJob(id, user.companyId);
    if (!job) {
      throw notFoundException(errorMessages.JOB_NOT_FOUND + id);
    }
    return job;
  },

  updateJob: async (_root, { input: { id, title, description } }, { user }) => {
    if (!user) {
      throw unauthorizedError(errorMessages.UNAUTHORIZED);
    }
    const job = await jobEntity.updateJob({ id, companyId: user.companyId, title, description });
    if (!job) {
      throw notFoundException(errorMessages.JOB_NOT_FOUND + id);
    }
    return job;
  },
};
