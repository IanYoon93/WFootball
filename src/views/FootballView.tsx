import { IoIosArrowDown } from 'react-icons/io';
// import ProductList from '../components/Product/ProductList';
import styles from './CategoryView.module.css';
import ProductList from '../components/Product/ProductList';
import BreadCrumbs from '../components/common/BreadCrumbs';

export default function FootballView() {
  return (
    <div className={styles.main}>
      <section className={styles.contentCategory}>
        <BreadCrumbs category="Football" crumb="축구화/풋살화" />
        <div className={styles.contentHeader}>
          <h2 className={styles.title}>전체</h2>
          <div className={styles.contentSort}>
            <ul className={styles.selectOption}>
              <li className={styles.selectBox}>종류</li>
              {/* <li className={styles.selectBox}>축구화</li>
              <li className={styles.selectBox}>풋살화</li> */}
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
          <ProductList title="축구화/풋살화" limit={40} />
        </div>
      </section>
    </div>
  );
}
