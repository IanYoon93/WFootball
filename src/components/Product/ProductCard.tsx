import styles from './ProductCard.module.css';
// import dummy from '../../data/data.json';
import { Product } from '../../store/products';
// import ProductLoad from './ProductLoad';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ProductCard = ({ products, limit }: { products: Product[]; limit: number }): JSX.Element => {
  const [pages, setPage] = useState(1);
  console.log(setPage);
  const offset = (pages - 1) * limit;

  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  return (
    <>
      {products.slice(offset, offset + limit).map((product: Product) => (
        <div className={styles.productCard} key={product.id}>
          <Link to={`/${product.id}`} className={styles.productCard} key={product.id}>
            <img
              className={styles.productImg}
              key={product.id}
              src={isMobile ? product.img.replace('src/', '/') : product.img.replace(/^public\/|^src\//, '/')}
              alt="상품 이미지"
              referrerPolicy="no-referrer"
            />
            {/* <img className={styles.productImg} key={product.id} src={product.img.replace(/^public\/|^src\//, '/')} alt="상품 이미지" referrerPolicy="no-referrer" /> */}
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
