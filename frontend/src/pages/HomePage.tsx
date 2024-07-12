import { useEffect, useState } from 'react';
import { JobList } from '../components/JobList';
import { PaginationBar } from '../components/PaginationBar';
import { getJobs } from '../lib/graphql/queries';

// const JOBS_PER_PAGE = ;

export const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobs().then(setJobs);
  }, []);

  return (
    <div>
      <h1 className="title">
        Job Board
      </h1>
      <PaginationBar currentPage={currentPage} totalPages={10} //to add current value
        onPageChange={setCurrentPage}
      />
      <JobList jobs={jobs} />
    </div>
  );
};
