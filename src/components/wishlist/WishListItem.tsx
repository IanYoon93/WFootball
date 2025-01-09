import { useRecoilState } from 'recoil';
import { WishlistItems, WishlistState, removeFromWishList, wishlistState } from '../../store/wishlist';
import styles from './WishList.module.css';
import { Link } from 'react-router-dom';

type Item = {
  data: WishlistItems;
} & typeof defaultProps;

const defaultProps = {
  data: {},
};

const WishListItem = ({ data }: Item): JSX.Element => {
  const [wishlist, setWishlist] = useRecoilState<WishlistState>(wishlistState);

  const removeFromWishlistHandler = (id: string) => {
    setWishlist(removeFromWishList(wishlist, id));
  };

  return (
    <div className={styles.wishListItem}>
      <Link to={`/${data.id}`}>
        <figure className={styles.figure}>
          <img src={data.image.replace(/^public\/|^src\//, '/')} alt={data.title} className={styles.wishlistITemImg} />
        </figure>
      </Link>
      <div className={styles.wishlistITemInfo}>
        <h3 className={styles.itemTitle}>
          <Link to={`/${data.id}`} className={styles.Link}>
            {data.title}
          </Link>
        </h3>
        <p className={styles.wishlistITemPrice}>{data.price.toLocaleString()}원</p>
        <button type="button" onClick={() => removeFromWishlistHandler(data.id)} className={styles.btn}>
          삭제하기
        </button>
      </div>
    </div>
  );
};

WishListItem.defaultProps = defaultProps;

export default WishListItem;
