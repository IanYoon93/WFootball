import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import styles from './CategoryView.module.css';
import ProductList from '../components/Product/ProductList';

export default function ClothesView() {
  return (
    <div className={styles.main}>
      <section className={styles.contentCategory}>
        <div className={styles.breadCrumbs}>
          <ul className={styles.breadCrumbsList}>
            <li>Clothes</li>
            <IoIosArrowForward />
            <li>전체</li>
            <IoIosArrowForward />
            <li>전체</li>
          </ul>
        </div>
        <div className={styles.contentHeader}>
          <h2 className={styles.title}>전체</h2>
          <div className={styles.contentSort}>
            <ul className={styles.selectOption}>
              <li className={styles.selectBox}>종류</li>
              {/* <li className={styles.selectBox}>상의</li>
              <li className={styles.selectBox}>하의</li> */}
              <IoIosArrowDown />
            </ul>
            <ul className={styles.selectOption}>
              <li className={styles.selectBox}>브랜드</li>
              {/* <li className={styles.selectBox}>나이키</li>
              <li className={styles.selectBox}>아디다스</li> */}
              <IoIosArrowDown />
            </ul>
            <ul className={styles.selectOption}>
              <li className={styles.selectBox}>사이즈</li>
              <IoIosArrowDown />
            </ul>
          </div>
        </div>
        <div>
          <ProductList title="의류" limit={40} />
        </div>
      </section>
    </div>
  );
}