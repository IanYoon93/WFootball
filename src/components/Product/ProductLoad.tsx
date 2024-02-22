import styles from './ProductCard.module.css';

const ProductLoad = ({ limit }: { limit: number }): JSX.Element => {
  return (
    <>
      {0 < limit ? (
        Array.from(Array(limit)).map((index) => {
          <a className={styles.productCard} key={index}>
            <div className={styles.productInfo}>
              <p className={styles.title}></p>
            </div>
            <p className={styles.price}></p>
          </a>;
        })
      ) : (
        <div>제품이 없습니다.</div>
      )}
    </>
  );
};

export default ProductLoad;
