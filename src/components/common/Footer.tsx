import styles from './Footer.module.css';
import { FaGithubAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { SiNotion } from 'react-icons/si';

export default function Footer() {
  const menus = [
    { name: 'football', title: '축구화/풋살화' },
    { name: 'shoes', title: '런닝화/트레이닝화' },
    { name: 'clothes', title: '의류' },
    { name: 'accessory', title: '기타용품' },
  ];

  return (
    <div className={styles.footer}>
      <div className={styles.footerTop}>
        <h1 className={styles.company}>
          <Link to="/">
            <img className={styles.logo} src={logo} />
          </Link>
        </h1>
        <div className={styles.menu}>
          {menus.map((menu) => {
            return (
              <Link to={`/${menu.name}`} key={menu.name} className={styles.menuLink}>
                {menu.title}
              </Link>
            );
          })}
        </div>
        <div className={styles.snsLink}>
          <a href="https://sprout-ian.notion.site/55c4488082944e5a920d0ae1d4c52bb7?pvs=4" rel="noreferrer noopener external" target="_blank" className={styles.snsItem}>
            <SiNotion className={styles.snsIcon} />
          </a>
          <a href="https://github.com/IanYoon93/" rel="noreferrer noopener external" target="_blank" className={styles.snsItem}>
            <FaGithubAlt className={styles.snsIcon} />
          </a>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p className={styles.copyright}>
          본 페이지는 상업적 목적이 아닌 개인 프로젝트용으로 만들어진 사이트입니다.
          <br className={styles.none} /> ⓒ 2024 WFootball PROJECT
        </p>
      </div>
    </div>
  );
}
