import { RiSearchLine } from 'react-icons/ri';
import styles from './Search.module.css';

// TODO: input 검색 가능하게 구현하기
const Search = () => {
  return (
    <div className={styles.search}>
      <input type="text" placeholder="상품을 검색하세요." className={styles.searchInput} />
      <button type="button" className={styles.btnSearch}>
        <RiSearchLine className={styles.icon} />
      </button>
    </div>
  );
};

export default Search;
