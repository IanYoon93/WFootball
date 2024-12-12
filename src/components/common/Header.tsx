import { Link } from 'react-router-dom';
import Hamburger from './Hamburger';
import styles from './Header.module.css';
import Nav from './Nav';
import Search from './Search';
import Utile from './Utile';
import logo from '../../assets/logo.png';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHamburger = () => {
    setIsOpen(true);
  };

  return (
    <div className={styles.header}>
      <h1 className={styles.title}>
        <Link to="/">
          <img className={styles.logo} src={logo} alt="더블유 풋볼 로고" />
        </Link>
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
