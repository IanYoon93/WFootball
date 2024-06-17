import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './Slider.module.css';

export default function Slider() {
  return (
    <Carousel showArrows={false} autoPlay={true} infiniteLoop={true} showThumbs={false} showStatus={false} emulateTouch swipeable className={styles.slider}>
      <div className={styles.slide}>
        <img src="/src/assets/main01.png" alt="이미지" />
      </div>
      <div className={styles.slide}>
        <img src="/src/assets/main02.png" alt="나이키 축구화" />
      </div>
      <div className={styles.slide}>
        <img src="/src/assets/main03.png" alt="미즈노 축구화" />
      </div>
      <div className={styles.slide}>
        <img src="/src/assets/main04.png" alt="아디다스 축구화" />
      </div>
    </Carousel>
  );
}
