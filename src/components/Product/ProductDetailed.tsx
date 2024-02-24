import { useRecoilValueLoadable } from 'recoil';
import styles from './ProductDetailed.module.css';
import { Product, productsList } from '../../store/products';
import { useParams } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import { useEffect, useState } from 'react';

const ProductDetailed = (): JSX.Element => {
  const productsLoadable = useRecoilValueLoadable<Product[]>(productsList);
  const { id } = useParams();

  const [product, setProduct] = useState<Product | null>();

  useEffect(() => {
    if (id && 'hasValue' === productsLoadable.state) {
      const productId = parseInt(id);

      const loadedProduct = productsLoadable.contents.find((product: Product) => product.id === productId);

      console.log(loadedProduct);

      if (loadedProduct) {
        setProduct(loadedProduct);
      }
    }
  }, [productsLoadable, id]);

  if (productsLoadable.state === 'loading') {
    return <div>로딩중...</div>;
  }

  if (!product) {
    return <div>상품을 찾을 수 없습니다.</div>;
  }

  console.log(product.img);

  return (
    <section className={styles.content}>
      <div className={styles.breadCrumbs}>
        <ul className={styles.breadCrumbsList}>
          <li>축구화</li>
          <IoIosArrowForward />
          <li>축구화</li>
        </ul>
      </div>
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
              <button type="button" className={styles.btnCart}>
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
