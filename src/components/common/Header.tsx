// import { useState } from 'react';
import Hamburger from './Hamburger';
import styles from './Header.module.css';
import Nav from './Nav';
import Search from './Search';
import Utile from './Utile';

const Header = (): JSX.Element => {
  // TODO: 햄버거 메뉴 구현 중이었음. 이거 먼저 해야함
  // const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  // const handelHamburgerClick = () => {
  //   setIsHamburgerOpen(!isHamburgerOpen);
  // }

  return (
    <div className={styles.header}>
      <h1 className={styles.title}>
        <a href="/">
          <img className={styles.logo} src="src/assets/logo.png" alt="더블유 풋볼 로고" />
        </a>
      </h1>
      <Nav />
      <Search />
      <div className={styles.headerRight}>
        <Utile />
        <Hamburger />
      </div>
    </div>
  );
};

export default Header;
