import { jobEntity } from '../../db/jobs.js';

export const JobsQuery = {
  jobs: async (_root, { limit, offset }) => {
    const items = await jobEntity.getJobs(limit, offset);
    const totalCount = await jobEntity.countJobs();
    return { items, totalCount };
  },
};
