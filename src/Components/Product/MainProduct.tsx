import styles from './MainProduct.module.css';
import ProductList from './ProductList';

export default function MainProduct() {
  return (
    <>
      <section className={styles.mainProduct}>
        <h2 className={styles.title}>축구화/풋살화</h2>
        <ProductList />
      </section>
      <section className={styles.mainProduct}>
        <h2 className={styles.title}>런닝/트레이닝화</h2>
        <ProductList />
      </section>
      <section className={styles.mainProduct}>
        <h2 className={styles.title}>의류</h2>
        <ProductList />
      </section>
      <section className={styles.mainProduct}>
        <h2 className={styles.title}>기타용품</h2>
        <ProductList />
      </section>
    </>
  );
}
