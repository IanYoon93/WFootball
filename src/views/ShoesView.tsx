import styles from './CategoryView.module.css';
import ProductList from '../components/Product/ProductList';
import BreadCrumbs from '../components/common/BreadCrumbs';
import Filter from '../components/filter/Filter';
import { useMemo, useState } from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { Product, productsList } from '../store/products';
// import ProductCard from '../components/Product/ProductCard';

// TODO: 필러링 버튼 클릭시 해당하는 리스트 필터링해서 불러오기
const ShoesView = (): JSX.Element => {
  const productsLoadable = useRecoilValueLoadable<Product[]>(productsList);
  const allProducts: Product[] = useMemo(() => ('hasValue' === productsLoadable.state ? productsLoadable.contents : []), [productsLoadable.state, productsLoadable.contents]);
  const categories = ['런닝화', '트레이닝화'];
  const brands = ['나이키', '아디다스'];
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category === '전체' ? '' : category);
  };

  const handleBrandChange = (brand: string) => {
    setSelectedBrand(brand === '전체' ? '' : brand);
  };

  return (
    <div className={styles.main}>
      <section className={styles.contentCategory}>
        <BreadCrumbs category="Shoes" crumb="런닝화/트레이닝화" />
        <div className={styles.contentHeader}>
          <h2 className={styles.title}>전체</h2>
          <div className={styles.contentSort}>
            <Filter title="종류" options={['전체', ...categories]} selectedOption={selectedCategory} onOptionChange={handleCategoryChange} />
            <Filter title="브랜드" options={['전체', ...brands]} selectedOption={selectedBrand} onOptionChange={handleBrandChange} />
          </div>
        </div>
        <div>
          <ProductList title="런닝화/트레이닝화" limit={40} products={allProducts} />
        </div>
      </section>
    </div>
  );
};

export default ShoesView;
