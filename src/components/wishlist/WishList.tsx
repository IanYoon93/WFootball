import { useRecoilValueLoadable } from 'recoil';
import { WishlistItems, wishList } from '../../store/wishlist';
import styles from './WishList.module.css';
import { Link } from 'react-router-dom';
import WishListItem from './WishListItem';

const WishList = (): JSX.Element => {
  const wishlistLoadable = useRecoilValueLoadable<WishlistItems[]>(wishList);
  const wishlistItems: WishlistItems[] = 'hasValue' === wishlistLoadable.state ? wishlistLoadable.contents : [];

  return (
    <>
      <div className={styles.content}>
        {wishlistItems.length <= 0 && (
          <div>
            <h2 className={styles.title}>위시리스트에 담긴 물품이 없습니다.</h2>
            <Link to="/" className={styles.btnHome}>
              담으러 가기
            </Link>
          </div>
        )}
        <div className={styles.wishlistArea}>
          {0 < wishlistItems.length
            ? wishlistItems.map((wishlist: WishlistItems) => {
                return <WishListItem key={wishlist.id} data={wishlist} />;
              })
            : ''}
        </div>
      </div>
    </>
  );
};

export default WishList;
