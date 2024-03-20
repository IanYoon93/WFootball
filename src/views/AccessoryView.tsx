import styles from './CategoryView.module.css';
import ProductList from '../components/Product/ProductList';
import BreadCrumbs from '../components/common/BreadCrumbs';
import Filter from '../components/filter/Filter';
import { useState } from 'react';
// import ProductCard from '../components/Product/ProductCard';

const AccessoryView = (): JSX.Element => {
  const categories = ['기타용품'];
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
        <BreadCrumbs category="Accessory" crumb="기타용품" />
        <div className={styles.contentHeader}>
          <h2 className={styles.title}>전체</h2>
          <div className={styles.contentSort}>
            <Filter title="종류" options={['전체', ...categories]} selectedOption={selectedCategory} onOptionChange={handleCategoryChange} />
            <Filter title="브랜드" options={['전체', ...brands]} selectedOption={selectedBrand} onOptionChange={handleBrandChange} />
          </div>
        </div>
        <div>
          <ProductList title="기타용품" limit={12} selectedCategory={selectedCategory} selectedBrand={selectedBrand} />
        </div>
      </section>
    </div>
  );
};

export default AccessoryView;
