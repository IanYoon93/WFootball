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
  maxPage: number;
  currentPage: number;
}

export default function Pagination({ currentPage, maxPage, onClick }: PaginationProps) {
  return (
    <div className={styles.pagination}>
      <button type="button" className={styles.btnArrow} disabled={currentPage === 1}>
        {'< prev'}
      </button>
      {new Array(maxPage).fill(null).map((_, i) => (
        <PageButton key={i + 1} onClick={onClick} selected={i + 1 === currentPage} number={i + 1} />
      ))}
      <button type="button" className={styles.btnArrow} disabled={currentPage === maxPage}>
        {'next >'}
      </button>
    </div>
  );
}
