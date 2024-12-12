import { Link } from 'react-router-dom';
import styles from './Hamburger.module.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useEffect, useRef, useState } from 'react';

const Hamburger = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  // 드롭다운 메뉴에 대한 참조
  const menuRef = useRef<HTMLDivElement>(null);

  // 바깥 클릭을 감지하여 메뉴 상태 업데이트
  useEffect(() => {
    function handleClickOutSide(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }

    // 바깥 클릭 이벤트 리스너 추가
    document.addEventListener('mousedown', handleClickOutSide);
    return () => {
      // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
      document.addEventListener('mousedown', handleClickOutSide);
    };
  }, [menuRef]);

  const menus = [
    { name: 'football', title: '축구화/풋살화' },
    { name: 'shoes', title: '런닝화/트레이닝화' },
    { name: 'clothes', title: '의류' },
    { name: 'accessory', title: '기타용품' },
  ];

  return (
    <div className={styles.hamburgerMenu} ref={menuRef}>
      <div>
        <GiHamburgerMenu className={styles.btnMenu} role="button" onClick={() => setIsOpen(!isOpen)} id="side-menu" />
        {isOpen && (
          <div>
            <label htmlFor="side-menu" className={styles.bg} onClick={() => setIsOpen(!isOpen)}></label>
            <ul className={styles.menu}>
              {menus.map((menu) => {
                return (
                  <li key={menu.name}>
                    <Link to={`/${menu.name}`} className={styles.menuLink} onClick={() => setIsOpen(!isOpen)}>
                      {menu.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hamburger;
