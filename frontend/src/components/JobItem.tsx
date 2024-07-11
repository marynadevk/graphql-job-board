import { Link } from 'react-router-dom';
import { IJob } from '../interfaces/IJob';

type JobItemProps = {
  job: IJob;
}

export const JobItem: React.FC<JobItemProps> = ({ job }) => {
  const title = job.company
    ? `${job.title} at ${job.company.name}`
    : job.title;
  return (
    <li className="media">
      <div className="media-left has-text-grey">
      </div>
      <div className="media-content">
        <Link to={`/jobs/${job.id}`}>
          {title}
        </Link>
      </div>
    </li>
  );
};
