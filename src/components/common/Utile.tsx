import styles from './Utile.module.css';
import { FiShoppingCart } from 'react-icons/fi';

// TODO: 로그인페이지, 회원가입페이지, 장바구니페이지, 마이페이지 각각 컴포넌트 생성해야 함
const Utile = () => {
  return (
    <ul className={styles.utile}>
      <li className={styles.utileItem}>
        <a href="/" className={styles.utileLink}>
          로그인
        </a>
      </li>
      <li className={styles.utileItem}>
        <a href="/" className={styles.utileLink}>
          회원가입
        </a>
      </li>
      <li className={styles.utileItem}>
        <a href="/" className={styles.utileLink}>
          <FiShoppingCart className={styles.icon} />
        </a>
      </li>
      <li className={styles.utileItem}>
        <a href="/" className={styles.utileLink}>
          <img src="src/assets/account.svg" alt="마이페이지" className={styles.icon} />
        </a>
      </li>
    </ul>
  );
};

export default Utile;
