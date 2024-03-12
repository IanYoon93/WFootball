import { useRecoilValueLoadable } from 'recoil';
import styles from './Cart.module.css';
import { CartItems, cartList, cartTotal } from '../../store/cart';
import { Link } from 'react-router-dom';
import CartList from './CartList';
import Modal from '../common/Modal';

const Cart = (): JSX.Element => {
  const cartLoadable = useRecoilValueLoadable<CartItems[]>(cartList);
  const cartItems: CartItems[] = 'hasValue' === cartLoadable.state ? cartLoadable.contents : [];
  const totalPrice = useRecoilValueLoadable(cartTotal).contents || 0;

  return (
    <>
      <div className={styles.content}>
        {cartItems.length <= 0 && (
          <div>
            <h2 className={styles.title}>장바구니에 담긴 물품이 없습니다.</h2>
            <Link to="/" className={styles.btnHome}>
              담으러 가기
            </Link>
          </div>
        )}
        <div className={styles.cartArea}>
          <div>
            {0 < cartItems.length
              ? cartItems.map((cart: CartItems) => {
                  return <CartList key={cart.id} data={cart} />;
                })
              : ''}
          </div>
          <div className={styles.add}>
            <span className={styles.total}>총 : {totalPrice} 원</span>
            <label htmlFor="confirm-modal" className={styles.btnModal}>
              구매하기
            </label>
          </div>
        </div>
      </div>
      <Modal />
    </>
  );
};

export default Cart;
