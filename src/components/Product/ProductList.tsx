import styles from './ProductList.module.css';

// TODO: 제품 아이템 컴포넌트 따로 생성하고, 해당 컴포넌트에서 제품 데이터 불러오기, 제품 상세페이지 구현하기
export default function ProductList() {
  return (
    <div className={styles.productList}>
      <div className={styles.productCard}>
        <img className={styles.productImg} src="src/assets/shoes/soccer_shoes01.jpeg" alt="축구화이미지" />
        <div className={styles.productInfo}>
          <p className={styles.title}>aaaaaaaaaaa</p>
          <p className={styles.subTitle}>dddddd</p>
        </div>
        <p className={styles.price}>1111111원</p>
      </div>
      <div className={styles.productCard}>
        <img className={styles.productImg} src="src/assets/shoes/soccer_shoes01.jpeg" alt="축구화이미지" />
        <div className={styles.productInfo}>
          <p className={styles.title}>aaaaaaaaaaa</p>
          <p className={styles.subTitle}>dddddd</p>
        </div>
        <p className={styles.price}>1111111원</p>
      </div>
      <div className={styles.productCard}>
        <img className={styles.productImg} src="src/assets/shoes/soccer_shoes01.jpeg" alt="축구화이미지" />
        <div className={styles.productInfo}>
          <p className={styles.title}>aaaaaaaaaaa</p>
          <p className={styles.subTitle}>dddddd</p>
        </div>
        <p className={styles.price}>1111111원</p>
      </div>
      <div className={styles.productCard}>
        <img className={styles.productImg} src="src/assets/shoes/soccer_shoes01.jpeg" alt="축구화이미지" />
        <div className={styles.productInfo}>
          <p className={styles.title}>aaaaaaaaaaa</p>
          <p className={styles.subTitle}>dddddd</p>
        </div>
        <p className={styles.price}>1111111원</p>
      </div>
    </div>
  );
}
