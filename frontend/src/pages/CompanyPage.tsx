import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getCompany } from '../lib/graphql/queries';
import { JobList } from '../components/JobList';

export const CompanyPage = () => {
  const { companyId } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(() => {
    getCompany(companyId).then(setCompany);
  }, [companyId]);

  if (!company) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1 className="title">
        {company.name}
      </h1>
      <div className="box">
        {company.description}
      </div>
      <h2 className="title is-5">
        Jobs at {company.name}
      </h2>
      <JobList jobs={company.jobs} />
    </div>
  );
};
