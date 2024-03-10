import styles from './Utile.module.css';
import { FiShoppingCart } from 'react-icons/fi';
import icon from '../../assets/account.svg';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { auth } from '../../service/firebase';
import { logout } from '../../service/auth';
import { User } from 'firebase/auth';

// TODO: 로그인페이지, 회원가입페이지, 장바구니페이지, 마이페이지 각각 컴포넌트 생성해야 함
const Utile = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await logout();
    setUser(null);
  };

  return (
    <ul className={styles.utile}>
      <li className={styles.utileItem}>
        {user ? (
          <button type="submit" onClick={handleLogout} className={styles.btnLogout}>
            로그아웃
          </button>
        ) : (
          <Link to="/login" className={styles.utileLink}>
            로그인
          </Link>
        )}
      </li>
      <li className={styles.utileItem}>
        <Link to="/signup" className={styles.utileLink}>
          회원가입
        </Link>
      </li>
      <li className={styles.utileItem}>
        <a href="/" className={styles.utileLink}>
          <FiShoppingCart className={styles.icon} />
        </a>
      </li>
      <li className={styles.utileItem}>
        <a href="/" className={styles.utileLink}>
          <img src={icon} alt="마이페이지" className={styles.icon} />
        </a>
      </li>
    </ul>
  );
};

export default Utile;
