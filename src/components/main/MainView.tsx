import MainProduct from '../Product/MainProduct';
import styles from './MainView.module.css';
import Slider from './Slider';

import dummy from '../../data/data.json';

export default function MainView() {
  console.log(dummy);
  return (
    <div className={styles.main}>
      <Slider />
      <MainProduct />
    </div>
  );
}
