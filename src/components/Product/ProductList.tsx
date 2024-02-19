import ProductCard from './ProductCard';
import styles from './ProductList.module.css';

export default function ProductList() {
  return (
    <div className={styles.productList}>
      <ProductCard />
    </div>
  );
}
