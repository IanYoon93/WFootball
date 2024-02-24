import ProductDetailed from '../components/Product/ProductDetailed';
import styles from './ProductsView.module.css';

const ProductsView = (): JSX.Element => {
  return (
    <div className={styles.main}>
      <ProductDetailed />
    </div>
  );
};

export default ProductsView;
