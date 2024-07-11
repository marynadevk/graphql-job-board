import { MouseEventHandler } from 'react';

type PageButtonProps = {
  page: number | string;
  currentPage: number;
  onClick: MouseEventHandler;
}

export const PageButton: React.FC<PageButtonProps> = ({ page, currentPage, onClick }) => {
  if (page === currentPage) {
    return (
      <button
        className="pagination-link is-current"
        aria-label={`Page ${page}`}
        aria-current="page"
      >
        {page}
      </button>
    );
  }
  if (page === '<' || page === '>') {
    return (
      <span className="pagination-ellipsis">
        &hellip;
      </span>
    );
  }
  return (
    <button
      className="pagination-link"
      aria-label={`Go to page ${page}`}
      onClick={onClick}
    >
      {page}
    </button>
  );
};
