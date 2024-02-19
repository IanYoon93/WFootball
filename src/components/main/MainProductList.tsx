import ProductCard from '../Product/ProductCard';
import styles from './MainProductList.module.css';

// TODO: 제품 아이템 컴포넌트 따로 생성하고, 해당 컴포넌트에서 제품 데이터 불러오기, 제품 상세페이지 구현하기
export default function MainProductList() {
  return (
    <div className={styles.productList}>
      <ProductCard />
    </div>
  );
}
