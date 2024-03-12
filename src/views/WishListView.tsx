import BreadCrumbs from '../components/common/BreadCrumbs';
import WishList from '../components/wishlist/WishList';
import styles from './WishListView.module.css';

export default function WishListView() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <BreadCrumbs category="홈" crumb="위시리스트" />
        <WishList />
      </div>
    </div>
  );
}
