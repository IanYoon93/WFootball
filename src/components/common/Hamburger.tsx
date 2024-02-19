import styles from './Hamburger.module.css';
import { GiHamburgerMenu } from 'react-icons/gi';

const Hamburger = () => {
  return (
    <div className={styles.hamburgerMenu}>
      <GiHamburgerMenu className={styles.btnMenu} />
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <a href="/" className={styles.menuLink}>
            축구화/풋살화
          </a>
        </li>
        <li className={styles.menuItem}>
          <a href="/" className={styles.menuLink}>
            런닝/트레이닝화
          </a>
        </li>
        <li className={styles.menuItem}>
          <a href="/" className={styles.menuLink}>
            의류
          </a>
        </li>
        <li className={styles.menuItem}>
          <a href="/" className={styles.menuLink}>
            기타용품
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Hamburger;
