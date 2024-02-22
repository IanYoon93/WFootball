import styles from './ProductCard.module.css';
// import dummy from '../../data/data.json';
import type { Product } from '../../store/products';
import ProductLoad from './ProductLoad';

const ProductCard = ({ products, limit }: { products: Product[]; limit: number }): JSX.Element => {
  return (
    <>
      {0 < products.length ? (
        products.slice(0, limit).map((product: Product) => {
          return (
            <a className={styles.productCard} key={product.id}>
              <img className={styles.productImg} key={product.id} src={product.img} alt="상품 이미지" />
              <div className={styles.productInfo}>
                <p className={styles.title}>{product.title}</p>
              </div>
              <p className={styles.price}>{product.price} 원</p>
            </a>
          );
        })
      ) : (
        <ProductLoad limit={limit} />
      )}
    </>
  );
};

export default ProductCard;
