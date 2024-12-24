import styles from './ProductCard.module.css';
// import dummy from '../../data/data.json';
import { Product } from '../../store/products';
// import ProductLoad from './ProductLoad';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

// TODO : 모바일 크롬 이미지 엑박 해결
const ProductCard = ({ products, limit }: { products: Product[]; limit: number }): JSX.Element => {
  const [pages, setPage] = useState(1);
  console.log(setPage);
  const offset = (pages - 1) * limit;

  return (
    <>
      {products.slice(offset, offset + limit).map((product: Product) => (
        <div className={styles.productCard} key={product.id}>
          <Link to={`/${product.id}`} className={styles.productCard} key={product.id}>
            <img className={styles.productImg} key={product.id} src={product.img.replace(/^public\/|^src\//, '/')} alt="상품 이미지" />
            <div className={styles.productInfo}>
              <p className={styles.title}>{product.title}</p>
            </div>
            <p className={styles.price}>{product.price} 원</p>
          </Link>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
