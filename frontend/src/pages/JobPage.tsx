import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useJob } from '../lib/graphql/hooks';
import { LoadingOrError } from '../components/LoadingOrError';
import { formatDate } from '../lib/formatters';

export const JobPage = () => {
  const { jobId } = useParams();
  const { job, loading, error } = useJob(jobId);
  if (!job) return null;
  const { title, company, description, date } = job;
  const formattedDate = formatDate(date, 'long');
  return (
    <div>
      <LoadingOrError loading={loading} error={error} />
      <h1 className="title is-2">{title}</h1>
      <h2 className="subtitle is-4">
        <Link to={`/companies/${company.id}`}>{company.name}</Link>
      </h2>
      <div className="box">
        <div className="block has-text-grey">Posted: {formattedDate}</div>
        <p className="block">{description}</p>
      </div>
    </div>
  );
};
