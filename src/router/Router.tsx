import { Route, Routes } from 'react-router-dom';
import MainView from '../components/main/MainView';
import FootballView from '../views/FootballView';
import ShoesView from '../views/ShoesView';
import ClothesView from '../views/ClothesView';
import AccessoryView from '../views/AccessoryView';
import Products from '../views/ProductsView';

const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<MainView />} />
      <Route path="/football" element={<FootballView />} />
      <Route path="/shoes" element={<ShoesView />} />
      <Route path="/clothes" element={<ClothesView />} />
      <Route path="/accessory" element={<AccessoryView />} />
      <Route path="/product/:id" element={<Products />} />
    </Routes>
  );
};

export default Router;
