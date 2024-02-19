import ProductList from '../components/Product/ProductList';
import styles from './/CategoryView.module.css';

export default function ClothesView() {
  return (
    <div className={styles.main}>
      <section className={styles.category}>
        <div>
          <h2 className={styles.title}>의류</h2>
          <ProductList />
        </div>
      </section>
    </div>
  );
}
