import styles from './CategoryView.module.css';
import ProductList from '../components/Product/ProductList';
import BreadCrumbs from '../components/common/BreadCrumbs';
import Filter from '../components/filter/Filter';
import { useState } from 'react';

const FootballView = (): JSX.Element => {
  const categories = ['축구화', '풋살화'];
  const brands = ['Nike', 'Adidas'];
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
        <BreadCrumbs category="Football" crumb="축구화/풋살화" />
        <div className={styles.contentHeader}>
          <div className={styles.contentSort}>
            <Filter title="종류" options={['전체', ...categories]} selectedOption={selectedCategory} onOptionChange={handleCategoryChange} />
            <Filter title="브랜드" options={['전체', ...brands]} selectedOption={selectedBrand} onOptionChange={handleBrandChange} />
          </div>
        </div>
        <div>
          <ProductList title="축구화/풋살화" limit={12} selectedCategory={selectedCategory} selectedBrand={selectedBrand} />
        </div>
      </section>
    </div>
  );
};

export default FootballView;
