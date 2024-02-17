import styles from './Nav.module.css';

// TODO: 카테고리별 페이지 생성해야함
const Nav = (): JSX.Element => {
  return (
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
  );
};

export default Nav;
