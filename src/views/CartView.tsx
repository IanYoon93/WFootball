import Cart from '../components/carts/Cart';
import BreadCrumbs from '../components/common/BreadCrumbs';
import styles from './CartView.module.css';

export default function CartView() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <BreadCrumbs category="홈" crumb="장바구니" />
        <Cart />
      </div>
    </div>
  );
}
