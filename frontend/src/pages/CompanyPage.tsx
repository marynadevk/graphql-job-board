import { useParams } from "react-router";
import { JobList } from "../components/JobList";
import { useCompany } from "../lib/graphql/hooks";
import { LoadingOrError } from '../components/LoadingOrError';

export const CompanyPage = () => {
  const { companyId } = useParams();
  const { company, loading, error } = useCompany(companyId);
  
  if (!company) {
    return null;
  }

  const { name, description, jobs} = company;

  return (
    <>
      <LoadingOrError loading={loading} error={error} />
      {company && (
        <div>
          <h1 className="title">{name}</h1>
          <div className="box">{description}</div>
          <h2 className="title is-5">Jobs at {name}</h2>
          <JobList jobs={jobs} />
        </div>
      )}
    </>
  );
};
