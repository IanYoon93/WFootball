import { IoIosArrowForward } from 'react-icons/io';
import styles from './BreadCrumbs.module.css';
import { Category } from '../../constants/category';

type BreadCrumbs = {
  category?: string;
  crumb?: string;
} & typeof defaultProps;

const defaultProps = {
  category: '',
  crumb: '',
};

const BreadCrumbs = ({ category, crumb }: BreadCrumbs): JSX.Element => {
  return (
    <div className={styles.breadCrumbs}>
      <ul className={styles.breadCrumbsList}>
        <li>{Category[category] ? Category[category] : category}</li>
        <IoIosArrowForward />
        <li>{crumb}</li>
      </ul>
    </div>
  );
};

export default BreadCrumbs;
