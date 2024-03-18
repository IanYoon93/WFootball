import cx from 'clsx';
import styles from './Pagination.module.css';

interface OnClickProps {
  onClick: (page: number) => void;
}

interface PageButtonProps extends OnClickProps {
  number: number;
  selected: boolean;
}

function PageButton({ number, onClick, selected }: PageButtonProps) {
  return (
    <button type="button" className={cx(styles.btnPage, { [styles.selected]: selected })} onClick={() => onClick(number)}>
      {number}
    </button>
  );
}

interface PaginationProps extends OnClickProps {
  currentPage: number;
  limit: number;
  page: number;
  setPage?: (page: number) => void;
  maxPage: number;
}

export default function Pagination({ currentPage, maxPage, limit, onClick }: PaginationProps) {
  const numPages = Math.ceil(maxPage / limit);

  return (
    <div className={styles.pagination}>
      <button type="button" className={styles.btnArrow} onClick={() => onClick(currentPage - 1)} disabled={currentPage === 1}>
        {'< prev'}
      </button>
      {new Array(numPages).fill(null).map((_, i) => (
        <PageButton key={i + 1} onClick={onClick} selected={i + 1 === currentPage} number={i + 1} />
      ))}
      <button type="button" className={styles.btnArrow} onClick={() => onClick(currentPage + 1)} disabled={currentPage === numPages}>
        {'next >'}
      </button>
    </div>
  );
}
