import styles from './Footer.module.css';
import { BsInstagram } from 'react-icons/bs';
import { FaGithubAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
            <img className={styles.logo} src="src/assets/logo.png" alt="더블유 풋볼 로고" />
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
          <a href="https://www.instagram.com/yoonmongguuuu/" rel="noreferrer noopener external" target="_blank" className={styles.snsItem}>
            <BsInstagram className={styles.snsIcon} />
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
