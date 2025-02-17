import styles from './Cart.module.css';
import { useRecoilState } from 'recoil';
import { CartItems, CartState, cartState, removeFromCart } from '../../store/cart';
import { Link } from 'react-router-dom';

type Item = {
  data: CartItems;
} & typeof defaultProps;

const defaultProps = {
  data: {},
};

// TODO: 상품별 체크 박스 추가 후 화면 아래에 전체 선택, 선택 해제 기능 추가.
const CartList = ({ data }: Item): JSX.Element => {
  const [cart, setCart] = useRecoilState<CartState>(cartState);

  const removeFromCartHandler = (id: string) => {
    setCart(removeFromCart(cart, id));
  };

  const addToCartHandler = (id: string) => {
    setCart({ ...cart, [id]: { id: id, count: (cart[id].count || 0) + 1 } });
  };

  return (
    <div className={styles.cartList}>
      <Link to={`/${data.id}`} key={data.id}>
        <figure className={styles.figure}>
          <img src={data.image} alt={data.title} className={styles.cartItemImg} />
        </figure>
      </Link>
      <div className={styles.cartItemInfo}>
        <h3 className={styles.itemTitle}>
          <Link to={`/${data.id}`} className={styles.Link}>
            {data.title}
          </Link>
        </h3>
        <p className={styles.cartItemPrice}>{data.price.toLocaleString()}원</p>
        <div className={styles.cartActions}>
          <div className={styles.btnGroup}>
            <button type="button" onClick={() => removeFromCartHandler(data.id)} className={styles.btn}>
              -
            </button>
            <button type="button" className={styles.btnCount}>
              {data.count}
            </button>
            <button type="button" onClick={() => addToCartHandler(data.id)} className={styles.btn}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

CartList.defaultProps = defaultProps;

export default CartList;
