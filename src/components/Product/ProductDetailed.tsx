import { useRecoilState, useRecoilValueLoadable } from 'recoil';
import styles from './ProductDetailed.module.css';
import { Product, productsList } from '../../store/products';
import { useParams } from 'react-router-dom';
import { ReactHTMLElement, useCallback, useState } from 'react';
import BreadCrumbs from '../common/BreadCrumbs';
import { CartItems, CartState, addToCart, cartState, removeFromCart } from '../../store/cart';
import ProductLoad from './ProductLoad';
import { WishlistState, addToWishList, wishlistState } from '../../store/wishlist';

// TODO: 별점 기능 추가, 바로 구매하기 클릭시 기능 추가, 쿠폰 기능 추가해보기
const ProductDetailed = (): JSX.Element => {
  const productsLoadable = useRecoilValueLoadable<Product[]>(productsList);
  const products: Product[] = 'hasValue' === productsLoadable.state ? productsLoadable.contents : [];
  const param = useParams();
  const product: Product = products.filter((item) => param.id === item.id.toString())[0];

  const [cart, setCart] = useRecoilState<CartState>(cartState);
  const [wishlist, setWishlist] = useRecoilState<WishlistState>(wishlistState);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);

  const addToCartHandler = useCallback(
    (productId: string, quantity: number) => {
      setCart(addToCart(cart, productId, quantity));
    },
    [cart, setCart]
  );

  const addToWishlistHandler = useCallback(
    (productId: string) => {
      setWishlist(addToWishList(wishlist, productId));
    },
    [wishlist, setWishlist]
  );

  if ('loading' === productsLoadable.state) {
    return <ProductLoad limit={0} />;
  }

  // 사이즈 선택 기능
  const handelChangeSize = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedSize(e.currentTarget.value);
  };

  // 수량 증가
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // 수량 감소
  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <section className={styles.content}>
      <BreadCrumbs category={product.category} crumb={product.title} />
      <div className={styles.productDetail}>
        <img className={styles.productImg} src={product.img} alt={product.title} />
        <div className={styles.productInfo}>
          <p className={styles.title}>{product.title}</p>
          <p className={styles.price}>{product.price} 원</p>
          <div className={styles.rating}>별점/ 5</div>
          <div className={styles.sizeArea}>
            <strong>사이즈 선택</strong>
            <div className={styles.btnSizeArea}>
              {['220', '225', '230', '235', '240', '245', '250', '255'].map((size) => (
                <button key={size} type="button" value={size} className={`${styles.btnSize} ${selectedSize === size ? styles.selected : ''}`} onClick={handelChangeSize}>
                  {size}
                </button>
              ))}
            </div>
          </div>
          {selectedSize && (
            <div className={styles.selectedSize}>
              <p>{selectedSize}</p>
              <div className={styles.btnGroup}>
                <button type="button" className={styles.btn} onClick={decreaseQuantity}>
                  -
                </button>
                <div className={styles.count}>{quantity}</div>
                <button type="button" className={styles.btn} onClick={increaseQuantity}>
                  +
                </button>
              </div>
              <div className={styles.total}>{product.price * quantity}원</div>
            </div>
          )}
          <div className={styles.btnArea}>
            <div className={styles.btnTopArea}>
              <button type="button" className={styles.btnWishlist} onClick={() => addToWishlistHandler(product.id?.toString())}>
                찜하기
              </button>
              <button type="button" className={styles.btnCart} onClick={() => addToCartHandler(product.id?.toString(), quantity)}>
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
