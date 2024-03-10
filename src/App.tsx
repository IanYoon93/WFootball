import { BrowserRouter } from 'react-router-dom';
import styles from './App.module.css';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Router from './router/Router';
import useUser from './constants/useUser';
import { Toaster } from 'sonner';

function App() {
  useUser();
  return (
    <BrowserRouter>
      <section className={styles.wrap}>
        <Header />
        <section>
          <Router />
          <Toaster position="top-center" />
        </section>
        <Footer />
      </section>
    </BrowserRouter>
  );
}

export default App;
