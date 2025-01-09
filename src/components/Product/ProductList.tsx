import React, { useEffect, useState } from 'react';
import { Product, productsList } from '../../store/products';
import styles from './ProductList.module.css';
import { useRecoilValueLoadable } from 'recoil';
import ProductLoad from './ProductLoad';
import Pagination from '../pagination/Pagination';
import { Link, useSearchParams } from 'react-router-dom';

type Items = {
  title?: string;
  limit: number;
  selectedCategory?: string;
  selectedBrand?: string;
};

const defaultProps = {
  title: '',
  limit: 12,
};

const ProductList = ({ title, limit, selectedCategory, selectedBrand }: Items): JSX.Element => {
  const { state, contents: allProducts } = useRecoilValueLoadable<Product[]>(productsList);
  const [products, setProducts] = useState<Product[]>([]);
  const [pages, setPage] = useState(1);
  const [totalPageCount, setTotalPageCount] = useState(1);
  const offset = (pages - 1) * limit;
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page') ?? '1', offset);

  useEffect(() => {
    if (state === 'hasValue') {
      let filteredProducts = [...allProducts];

      switch (title) {
        case '축구화/풋살화':
          filteredProducts = filteredProducts.filter((product) => product.category === '축구화' || product.category === '풋살화');
          break;
        case '런닝화/트레이닝화':
          filteredProducts = filteredProducts.filter((product) => product.category === '런닝화' || product.category === '트레이닝화');
          break;
        case '의류':
          filteredProducts = filteredProducts.filter((product) => product.category === '상의' || product.category === '하의');
          break;
        case '기타용품':
          filteredProducts = filteredProducts.filter((product) => product.category === '기타용품');
          break;
        default:
          break;
      }

      // 선택한 카테고리에 해당하는 제품만 필터링
      if (selectedCategory) {
        filteredProducts = filteredProducts.filter((product) => product.category === selectedCategory);
      }
      // 선택한 브랜드에 해당하는 제품만 필터링
      if (selectedBrand) {
        filteredProducts = filteredProducts.filter((product) => product.brand === selectedBrand);
      }

      // 필터링된 데이터 수를 기준으로 페이지 수 계산
      const totalPageCount = Math.ceil(filteredProducts.length / limit);

      // 페이지에 해당하는 제품만 추출
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const currentPageProducts = filteredProducts.slice(startIndex, endIndex);
      setProducts(currentPageProducts);

      //페이지 업데이트
      setPage(page);

      // 필터링된 데이터의 페이지 수 업데이트
      setTotalPageCount(totalPageCount);
      console.log(filteredProducts);
    }
  }, [title, selectedCategory, selectedBrand, allProducts, state, limit, offset, page]);

  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.productList}>
        {products.length > 0 ? (
          products.map((product: Product) => (
            <div className={styles.productCard} key={product.id}>
              <Link to={`/${product.id}`} className={styles.productCard} key={product.id}>
                <img className={styles.productImg} key={product.id} src={product.img.replace(/^public\/|^src\//, '/')} alt="상품 이미지" />
                <div className={styles.productInfo}>
                  <p className={styles.cardTitle}>{product.title}</p>
                </div>
                <p className={styles.price}>{product.price} 원</p>
              </Link>
            </div>
          ))
        ) : (
          <ProductLoad limit={limit} />
        )}
      </div>
      <div className={styles.paginationContainer}>
        <Pagination
          totalPageCount={totalPageCount}
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
