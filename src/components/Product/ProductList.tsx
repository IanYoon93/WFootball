import React, { Suspense, useEffect } from 'react';
import { Product, productsList } from '../../store/products';
// import ProductCard from './ProductCard';
import styles from './ProductList.module.css';
import { useRecoilValueLoadable } from 'recoil';
import ProductLoad from './ProductLoad';
import { useSearchParams } from 'react-router-dom';
import Pagination from '../pagination/Pagination';

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

const ProductList = ({ title, limit }: Items): JSX.Element => {
  const ProductCard = React.lazy(() => import('./ProductCard'));
  const ProductsLoadable = useRecoilValueLoadable<Product[]>(productsList);
  let products: Product[] = 'hasValue' === ProductsLoadable.state ? ProductsLoadable.contents : [];

  const maxPage = 10;

  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page') ?? '1', 10);
  // const state = searchParams.get('state');

  useEffect(() => {
    searchParams;
  }, [searchParams]);

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
      <div className={styles.paginationContainer}>
        <Pagination
          currentPage={page}
          maxPage={maxPage}
          onClick={(pageNumber) => {
            setSearchParams({ page: pageNumber.toString() });
          }}
        />
      </div>
    </>
  );
};

ProductList.defaultProps = defaultProps;

export default ProductList;
