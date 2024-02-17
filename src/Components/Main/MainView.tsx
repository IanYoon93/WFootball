import MainProduct from '../Product/MainProduct';
import styles from './MainView.module.css';
import Slider from './Slider';

export default function MainView() {
  return (
    <div className={styles.main}>
      <Slider />
      <MainProduct />
    </div>
  );
}
