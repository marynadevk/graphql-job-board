import { jobEntity } from '../../db/jobs.js';
import { notFoundException } from '../../utils/errorHandlers.js';
import { errorMessages } from '../../utils/errorMessages.js';

export const JobQuery = {
  job: async (_root, { id }) => {
    const job = await jobEntity.getJob(id);
    if (!job) {
      throw notFoundException(errorMessages.JOB_NOT_FOUND + id);
    }
    return job;
  },
};
