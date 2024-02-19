import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import ProductList from '../components/Product/ProductList';
import styles from './/CategoryView.module.css';

export default function AccessoryView() {
  return (
    <div className={styles.main}>
      <section className={styles.contentCategory}>
        <div className={styles.breadCrumbs}>
          <ul className={styles.breadCrumbsList}>
            <li>Accessory</li>
            <IoIosArrowForward />
            <li>기타용품</li>
            <IoIosArrowForward />
            <li>전체</li>
          </ul>
        </div>
        <div className={styles.contentHeader}>
          <h2 className={styles.title}>전체</h2>
          <div className={styles.contentSort}>
            <ul className={styles.selectOption}>
              <li className={styles.selectBox}>브랜드</li>
              {/* <li className={styles.selectBox}>나이키</li>
              <li className={styles.selectBox}>아디다스</li> */}
              <IoIosArrowDown />
            </ul>
          </div>
        </div>
        <div>
          <ProductList />
        </div>
      </section>
    </div>
  );
}
