// import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

export const JobPage = () => {
  // const { jobId } = useParams();

  return (
    <div>
      <h1 className="title is-2">
        {"job.title"}
      </h1>
      <h2 className="subtitle is-4">
        <Link to={`/companies/${"job.company.id"}`}>
          {"job.company.name"}
        </Link>
      </h2>
      <div className="box">
        <div className="block has-text-grey">
        </div>
        <p className="block">
          {"job.description"}
        </p>
      </div>
    </div>
  );
};
