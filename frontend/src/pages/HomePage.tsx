import { useState } from 'react';
import { JobList } from '../components/JobList';
import { PaginationBar } from '../components/PaginationBar';
import { LoadingOrError } from '../components/LoadingOrError';
import { useJobs } from '../lib/graphql/hooks';

const JOBS_PER_PAGE = 7;

export const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { jobs, loading, error } = useJobs(
    JOBS_PER_PAGE,
    (currentPage - 1) * JOBS_PER_PAGE
  );
  
  if (!jobs) return null;
  const totalPages = Math.ceil(jobs.totalCount / JOBS_PER_PAGE);

  return (
    <>
      <LoadingOrError loading={loading} error={error} />
      <div>
        <h1 className="title"> Job Board </h1>
        <PaginationBar
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
        <JobList jobs={jobs.items} />
      </div>
    </>
  );
};
