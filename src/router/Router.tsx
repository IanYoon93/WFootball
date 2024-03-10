import { Route, Routes } from 'react-router-dom';
import MainView from '../components/main/MainView';
import FootballView from '../views/FootballView';
import ShoesView from '../views/ShoesView';
import ClothesView from '../views/ClothesView';
import AccessoryView from '../views/AccessoryView';
import ProductsView from '../views/ProductsView';
import LoginView from '../views/LoginView';

const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<MainView />} />
      <Route path="/product/:id" element={<ProductsView />} />
      <Route path="/football" element={<FootballView />} />
      <Route path="/shoes" element={<ShoesView />} />
      <Route path="/clothes" element={<ClothesView />} />
      <Route path="/accessory" element={<AccessoryView />} />
      <Route path="/login" element={<LoginView />} />
    </Routes>
  );
};

export default Router;
