import { useRecoilState, useRecoilValueLoadable } from 'recoil';
import styles from './ProductDetailed.module.css';
import { Product, productsList } from '../../store/products';
import { useParams } from 'react-router-dom';
import { useCallback } from 'react';
import BreadCrumbs from '../common/BreadCrumbs';
import { CartState, addToCart, cartState } from '../../store/cart';
import ProductLoad from './ProductLoad';

const ProductDetailed = (): JSX.Element => {
  const productsLoadable = useRecoilValueLoadable<Product[]>(productsList);
  const products: Product[] = 'hasValue' === productsLoadable.state ? productsLoadable.contents : [];
  // const { id } = useParams();
  const param = useParams();
  const product: Product = products.filter((item) => param.id === item.id.toString())[0];

  const [cart, setCart] = useRecoilState<CartState>(cartState);

  const addToCartHandler = useCallback(
    (productId: string) => {
      setCart(addToCart(cart, productId));
    },
    [cart, setCart]
  );

  if ('loading' === productsLoadable.state) {
    return <ProductLoad limit={0} />;
  }

  return (
    <section className={styles.content}>
      <BreadCrumbs category={product.category} crumb={product.title} />
      <div className={styles.productDetail} key={product.id}>
        <img className={styles.productImg} src={product.img} alt="제품 이미지" onLoad={() => console.log('이미지 로드됨')} onError={() => console.log('이미지 로드 실패')} />
        <div className={styles.productInfo}>
          <p className={styles.title}>{product.title}</p>
          <p className={styles.price}>{product.price} 원</p>
          <div className={styles.rating}>별점/ 5</div>
          {/* <div className={styles.total}>{product.price}원 / 1(수량)</div> */}
          <div className={styles.sizeArea}>
            <strong>사이즈 선택</strong>
            <div className={styles.btnSizeArea}>
              <button type="button" className={styles.btnSize}>
                220
              </button>
              <button type="button" className={styles.btnSize}>
                225
              </button>
              <button type="button" className={styles.btnSize}>
                230
              </button>
              <button type="button" className={styles.btnSize}>
                235
              </button>
              <button type="button" className={styles.btnSize}>
                240
              </button>
              <button type="button" className={styles.btnSize}>
                245
              </button>
              <button type="button" className={styles.btnSize}>
                250
              </button>
              <button type="button" className={styles.btnSize}>
                255
              </button>
            </div>
          </div>
          <div className={styles.btnArea}>
            <div className={styles.btnTopArea}>
              <button type="button" className={styles.btnWishlist}>
                찜하기
              </button>
              <button type="button" className={styles.btnCart} onClick={() => addToCartHandler(product.id?.toString())}>
                장바구니
              </button>
            </div>
            <div className={styles.btnBottomArea}>
              <button type="button" className={styles.btnPurchase}>
                바로 구매하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailed;
