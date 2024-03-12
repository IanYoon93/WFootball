import { useRecoilState } from 'recoil';
import { CartState, cartState } from '../../store/cart';
import styles from './Modal.module.css';

const Modal = (): JSX.Element => {
  const [cart, setCart] = useRecoilState<CartState>(cartState);
  const buyItems = () => setCart({} as CartState);

  return (
    <>
      <input type="checkbox" id="confirm-modal" className={styles.modalInput} />
      <div className={styles.modal}>
        <div className={styles.modalBox}>
          <h3 className={styles.buyTitle}>정말로 구매하시겠습니까?</h3>
          <p className={styles.delete}>장바구니의 모든 상품들이 삭제됩니다.</p>
          <div className={styles.modalAction}>
            <label htmlFor="confirm-modal" className={styles.btn} data-cart={cart} onClick={buyItems}>
              네
            </label>
            <label htmlFor="confirm-modal" className={styles.btnNo}>
              아니오
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
