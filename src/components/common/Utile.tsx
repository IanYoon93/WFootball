import styles from './Utile.module.css';
import { FiShoppingCart } from 'react-icons/fi';
import { FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { auth } from '../../service/firebase';
import { logout } from '../../service/auth';
import { User } from 'firebase/auth';
import { useRecoilValue } from 'recoil';
import { cartCount } from '../../store/cart';

// TODO: 장바구니페이지, 마이페이지 각각 컴포넌트 생성해야 함
const Utile = () => {
  const [user, setUser] = useState<User | null>(null);
  const count = useRecoilValue(cartCount);

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
        {user ? (
          <div className={styles.utileLink}>회원가입</div>
        ) : (
          <Link to="/signup" className={styles.utileLink}>
            회원가입
          </Link>
        )}
      </li>
      <li className={styles.utileItem}>
        {user ? (
          <Link to="/cart" className={styles.utileLink}>
            <FiShoppingCart className={styles.icon} />
            <span className={styles.cartCount}>{count}</span>
          </Link>
        ) : (
          <Link to="/login" className={styles.utileLink}>
            <FiShoppingCart className={styles.icon} />
            <span className={styles.cartCount}>{count}</span>
          </Link>
        )}
      </li>
      <li className={styles.utileItem}>
        {user ? (
          <Link to="/wishlist" className={styles.utileLink}>
            <FaRegHeart className={styles.icon} />
          </Link>
        ) : (
          <Link to="/login" className={styles.utileLink}>
            <FaRegHeart className={styles.icon} />
          </Link>
        )}
      </li>
    </ul>
  );
};

export default Utile;
