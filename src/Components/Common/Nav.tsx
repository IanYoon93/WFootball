import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

// TODO: 카테고리별 페이지 생성해야함
const Nav = () => {
  const menus = [
    { name: 'football', title: '축구화/풋살화' },
    { name: 'shoes', title: '런닝화/트레이닝화' },
    { name: 'clothes', title: '의류' },
    { name: 'accessory', title: '기타용품' },
  ];

  return (
    <div className={styles.menu}>
      {menus.map((menu) => {
        return (
          <Link to={`/${menu.name}`} key={menu.name} className={styles.menuLink}>
            {menu.title}
          </Link>
        );
      })}
    </div>
  );
};

export default Nav;
