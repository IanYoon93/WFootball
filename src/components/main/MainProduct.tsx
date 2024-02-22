// import { useRecoilValue } from 'recoil';
import styles from './MainProduct.module.css';
import MainProductList from '../Product/ProductList';
// import { Product, productsAipList } from '../../store/products';

const MainProduct = () => {
  return (
    <>
      <section className={styles.mainProduct}>
        <MainProductList title="축구화/풋살화" />
      </section>
      <section className={styles.mainProduct}>
        <MainProductList title="런닝화/트레이닝화" />
      </section>
      <section className={styles.mainProduct}>
        <MainProductList title="의류" />
      </section>
      <section className={styles.mainProduct}>
        <MainProductList title="기타용품" />
      </section>
    </>
  );
};

export default MainProduct;
