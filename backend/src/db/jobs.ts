import { connection } from './connection.js';
import { generateId } from './ids.js';
import { IJobEntity } from '../interfaces/index.js';

const getJobTable = () => connection.table<IJobEntity>('job');

class JobEntity {
  async countJobs(): Promise<number> {
    const { count } = await getJobTable().first().count('*', { as: 'count' });

    return Number(count);
  }

  async getJobs(limit: number, offset: number) {
    const query = getJobTable().select().orderBy('createdAt', 'desc');
    if (limit) {
      query.limit(limit);
    }
    if (offset) {
      query.offset(offset);
    }
    return await query;
  }

  async getJobsByCompany(companyId: string) {
    return await getJobTable().select().where({ companyId });
  }

  async getJob(id: string) {
    return await getJobTable().first().where({ id });
  }

  async createJob({ companyId, title, description }: CreateJobOptions) {
    const job: IJobEntity = {
      id: generateId(),
      companyId,
      title,
      description,
      createdAt: new Date().toISOString(),
    };
    await getJobTable().insert(job);
    return job;
  }

  async deleteJob(id: string, companyId: string) {
    const job = await getJobTable().first().where({ id, companyId });
    if (!job) {
      return null;
    }
    await getJobTable().delete().where({ id });
    return job;
  }

    async updateJob({ id, companyId, title, description }: UpdateJobOptions): Promise<IJobEntity | null> {
      const job = await getJobTable().first().where({ id, companyId });
      if (!job) {
        return null;
      }
      const updatedFields = { title, description };
      await getJobTable().update(updatedFields).where({ id });
      return { ...job, ...updatedFields };
    }
};

export const jobEntity = new JobEntity();

export type CreateJobOptions = Pick<IJobEntity, 'companyId' | 'title' | 'description'>;

export type UpdateJobOptions = Pick<IJobEntity, 'id' | 'companyId' | 'title' | 'description'>;