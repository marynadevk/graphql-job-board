import { Link } from 'react-router-dom';
import { IJob } from '../interfaces/IJob';
import { formatDate } from '../lib/formatters';

type JobItemProps = {
  job: IJob;
}

export const JobItem: React.FC<JobItemProps> = ({ job }) => {
  const {title, id, date } = job;
  return (
    <li className="media">
      <div className="media-left has-text-grey"> {formatDate(date)} </div>
      <div className="media-content">
        <Link to={`/jobs/${id}`}> {title} </Link>
      </div>
    </li>
  );
};
