import { useRecoilState, useRecoilValueLoadable } from 'recoil';
import styles from './ProductDetailed.module.css';
import { Product, productsList } from '../../store/products';
import { useParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import BreadCrumbs from '../common/BreadCrumbs';
import { CartState, addToCart, cartState, removeFromCart } from '../../store/cart';
import ProductLoad from './ProductLoad';
import { WishlistState, addToWishList, wishlistState } from '../../store/wishlist';

// TODO: 바로 구매하기 클릭시 기능 추가, 쿠폰 기능 추가해보기
const ProductDetailed = (): JSX.Element => {
  const productsLoadable = useRecoilValueLoadable<Product[]>(productsList);
  const products: Product[] = 'hasValue' === productsLoadable.state ? productsLoadable.contents : [];
  const param = useParams();
  const product: Product = products.filter((item) => param.id === item.id.toString())[0];

  const [cart, setCart] = useRecoilState<CartState>(cartState);
  const [wishlist, setWishlist] = useRecoilState<WishlistState>(wishlistState);
  const [selectedSize, setSelectedSize] = useState<Record<string, number>>({});
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
  const handleChangeSize = (size: string) => {
    setSelectedSize((prevSizes) => ({
      ...prevSizes,

      // 초기 수량이 없다면 1로 설정
      [size]: prevSizes[size] || 1,
    }));
  };

  // 수량 증가
  const increaseQuantity = (size: string) => {
    setSelectedSize((prevSizes) => ({
      ...prevSizes,
      [size]: prevSizes[size] + 1,
    }));
  };

  // 수량 감소
  const decreaseQuantity = (size: string) => {
    setSelectedSize((prevSizes) => ({
      ...prevSizes,

      // 최소 수량 1
      [size]: prevSizes[size] > 1 ? prevSizes[size] - 1 : 1,
    }));
  };

  return (
    <section className={styles.content}>
      <BreadCrumbs category={product.category} crumb={product.title} />
      <div className={styles.productDetail}>
        <img className={styles.productImg} src={product.img.replace(/^public\/|^src\//, '/')} alt={product.title} />
        <div className={styles.productInfo}>
          <p className={styles.title}>{product.title}</p>
          <p className={styles.price}>{product.price} 원</p>
          <div className={styles.sizeArea}>
            {product.size?.map(({ value, text }) => (
              <button key={value} type="button" className={`${styles.btnSize} ${selectedSize[value] ? styles.selected : ''}`} onClick={() => handleChangeSize(value)}>
                {text}
              </button>
            ))}
          </div>
          {Object.entries(selectedSize).map(([size, quantity]) => (
            <div key={size} className={styles.selectedSize}>
              <p>{size}</p>
              <div className={styles.btnGroup}>
                <button type="button" className={styles.btn} onClick={() => decreaseQuantity(size)}>
                  -
                </button>
                <div className={styles.count}>{quantity}</div>
                <button type="button" className={styles.btn} onClick={() => increaseQuantity(size)}>
                  +
                </button>
              </div>
              <div className={styles.total}>{product.price * quantity}원</div>
            </div>
          ))}
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
