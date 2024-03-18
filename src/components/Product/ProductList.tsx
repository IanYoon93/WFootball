import React, { Suspense, useEffect, useState } from 'react';
import { Product, productsList, productsURL } from '../../store/products';
// import ProductCard from './ProductCard';
import styles from './ProductList.module.css';
import { useRecoilValueLoadable } from 'recoil';
import ProductLoad from './ProductLoad';
import Pagination from '../pagination/Pagination';
import { useSearchParams } from 'react-router-dom';

type Items = {
  title?: string;
  limit?: number;
  data?: Array<Product>;
  products?: Product[];
} & typeof defaultProps;

const defaultProps = {
  title: '',
  limit: 12,
  data: [],
};

const ProductList = ({ title, limit }: Items): JSX.Element => {
  const ProductCard = React.lazy(() => import('./ProductCard'));
  const ProductsLoadable = useRecoilValueLoadable<Product[]>(productsList);
  let products: Product[] = 'hasValue' === ProductsLoadable.state ? ProductsLoadable.contents : [];

  const [posts, setPosts] = useState([]);
  console.log(posts);
  const [pages, setPage] = useState(1);
  const offset = (pages - 1) * limit;

  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page') ?? '1', offset);
  // const state = searchParams.get('state');

  useEffect(() => {
    searchParams;
  }, [searchParams]);

  useEffect(() => {
    fetch(`${productsURL}?page=${page}`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, [page]);

  switch (title) {
    case '축구화/풋살화':
      products = products.filter((item) => item.category === '축구화' || item.category === '풋살화');
      break;
    case '런닝화/트레이닝화':
      products = products.filter((item) => item.category === '런닝화' || item.category === '트레이닝화');
      break;
    case '의류':
      products = products.filter((item) => item.category === '상의' || item.category === '하의');
      break;
    case '기타용품':
      products = products.filter((item) => item.category === '기타용품');
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
          maxPage={products.length}
          limit={limit}
          currentPage={page}
          page={page}
          setPage={setPage}
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
