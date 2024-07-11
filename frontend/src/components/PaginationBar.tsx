import { getVisiblePages } from '../utils/utils';
import { PageButton } from './PageButton';

type PaginationBarProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const PaginationBar: React.FC<PaginationBarProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pages = getVisiblePages(currentPage, totalPages);
  return (
    <nav className="pagination is-centered" role="navigation" aria-label="pagination">
      <button className="pagination-previous" aria-label="Previous page"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}>
        &#x25C0;
      </button>
      <button className="pagination-next" arial-label="Next page"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}>
        &#x25B6;
      </button>
      <ul className="pagination-list">
        {pages.map((page) => (
          <li key={page}>
            <PageButton page={page} currentPage={currentPage}
              onClick={() => onPageChange(page as number)}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
