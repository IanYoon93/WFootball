import { IoIosArrowDown } from 'react-icons/io';
import styles from './CategoryView.module.css';
import ProductList from '../components/Product/ProductList';
import BreadCrumbs from '../components/common/BreadCrumbs';

export default function ShoesView() {
  return (
    <div className={styles.main}>
      <section className={styles.contentCategory}>
        <BreadCrumbs category="Shoes" crumb="런닝화/트레이닝화" />
        <div className={styles.contentHeader}>
          <h2 className={styles.title}>전체</h2>
          <div className={styles.contentSort}>
            <ul className={styles.selectOption}>
              <li className={styles.selectBox}>종류</li>
              {/* <li className={styles.selectBox}>런닝화</li>
              <li className={styles.selectBox}>트레이닝화</li> */}
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
          <ProductList title="런닝화/트레이닝화" />
        </div>
      </section>
    </div>
  );
}
