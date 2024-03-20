import cx from 'clsx';
import styles from './Pagination.module.css';

interface OnClickProps {
  onClick: (page: number) => void;
}

interface PageButtonProps extends OnClickProps {
  number: number;
  selected: boolean;
}

function PageButton({ number, onClick, selected }: PageButtonProps): JSX.Element {
  return (
    <button type="button" className={cx(styles.btnPage, { [styles.selected]: selected })} onClick={() => onClick(number)}>
      {number}
    </button>
  );
}

interface PaginationProps extends OnClickProps {
  currentPage: number;
  limit: number;
  page?: number;
  setPage?: (page: number) => void;
  totalPageCount: number;
}

export default function Pagination({ currentPage, totalPageCount, onClick }: PaginationProps) {
  return (
    <div className={styles.pagination}>
      <button type="button" className={styles.btnArrow} onClick={() => onClick(currentPage - 1)} disabled={currentPage === 1}>
        {'< prev'}
      </button>
      {Array.from({ length: totalPageCount }).map((_, i) => (
        <PageButton key={i + 1} onClick={onClick} selected={i + 1 === currentPage} number={i + 1} />
      ))}
      <button type="button" className={styles.btnArrow} onClick={() => onClick(currentPage + 1)} disabled={currentPage === totalPageCount}>
        {'next >'}
      </button>
    </div>
  );
}
