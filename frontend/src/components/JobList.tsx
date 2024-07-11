import { IJob } from '../interfaces/IJob';
import { JobItem } from './JobItem';

interface JobListProps {
  jobs: IJob[];
}

export const JobList: React.FC<JobListProps> = ({ jobs }: JobListProps) => {
  return (
    <ul className="box">
      {jobs.map((job) => (
        <JobItem key={job.id} job={job} />
      ))}
    </ul>
  );
}
