import ProductList from '../components/Product/ProductList';
import styles from './/CategoryView.module.css';

export default function ShoesView() {
  return (
    <div className={styles.main}>
      <section className={styles.category}>
        <div>
          <h2 className={styles.title}>런닝화/트레이닝화</h2>
          <ProductList />
        </div>
      </section>
    </div>
  );
}
