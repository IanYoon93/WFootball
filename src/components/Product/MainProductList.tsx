import React, { Suspense } from 'react';
import { Product, productsList } from '../../store/products';
// import ProductCard from './ProductCard';
import styles from './ProductList.module.css';
import { useRecoilValueLoadable } from 'recoil';
import ProductLoad from './ProductLoad';

type Items = {
  title?: string;
  limit?: number;
  data?: Array<Product>;
  products?: Product[];
} & typeof defaultProps;

const defaultProps = {
  title: '',
  limit: 4,
  data: [],
};

const MainProductList = ({ title, limit }: Items): JSX.Element => {
  const ProductCard = React.lazy(() => import('./ProductCard'));
  const ProductsLoadable = useRecoilValueLoadable<Product[]>(productsList);
  let products: Product[] = 'hasValue' === ProductsLoadable.state ? ProductsLoadable.contents : [];

  switch (title) {
    case '축구화/풋살화':
      products = products.filter((item) => item.category === '축구화' || item.category === '풋살화').slice(0, limit);
      break;
    case '런닝화/트레이닝화':
      products = products.filter((item) => item.category === '런닝화' || item.category === '트레이닝화').slice(0, limit);
      break;
    case '의류':
      products = products.filter((item) => item.category === '상의' || item.category === '하의').slice(0, limit);
      break;
    case '기타용품':
      products = products.filter((item) => item.category === '기타용품').slice(0, limit);
      break;
    default:
      break;
  }

  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.productList}>
        <Suspense fallback={<ProductLoad limit={limit} />}>
          <ProductCard products={products} limit={limit} />
        </Suspense>
      </div>
    </>
  );
};

MainProductList.defaultProps = defaultProps;

export default MainProductList;
