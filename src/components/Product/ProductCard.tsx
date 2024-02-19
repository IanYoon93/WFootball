import styles from './ProductCard.module.css';

export default function ProductCard() {
  return (
    <>
      <a className={styles.productCard}>
        <img className={styles.productImg} src="src/assets/shoes/soccer_shoes01.jpeg" alt="축구화이미지" />
        <div className={styles.productInfo}>
          <p className={styles.title}>aaaaaaaaaaa</p>
          <p className={styles.subTitle}>dddddd</p>
        </div>
        <p className={styles.price}>1111111원</p>
      </a>
      <a className={styles.productCard}>
        <img className={styles.productImg} src="src/assets/shoes/soccer_shoes01.jpeg" alt="축구화이미지" />
        <div className={styles.productInfo}>
          <p className={styles.title}>aaaaaaaaaaa</p>
          <p className={styles.subTitle}>dddddd</p>
        </div>
        <p className={styles.price}>1111111원</p>
      </a>
      <a className={styles.productCard}>
        <img className={styles.productImg} src="src/assets/shoes/soccer_shoes01.jpeg" alt="축구화이미지" />
        <div className={styles.productInfo}>
          <p className={styles.title}>aaaaaaaaaaa</p>
          <p className={styles.subTitle}>dddddd</p>
        </div>
        <p className={styles.price}>1111111원</p>
      </a>
      <a className={styles.productCard}>
        <img className={styles.productImg} src="src/assets/shoes/soccer_shoes01.jpeg" alt="축구화이미지" />
        <div className={styles.productInfo}>
          <p className={styles.title}>aaaaaaaaaaa</p>
          <p className={styles.subTitle}>dddddd</p>
        </div>
        <p className={styles.price}>1111111원</p>
      </a>
    </>
  );
}
