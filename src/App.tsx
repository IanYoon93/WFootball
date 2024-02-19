import styles from './App.module.css';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Router from './router/Router';

function App() {
  return (
    <>
      <section className={styles.wrap}>
        <Header />
        <section>
          <Router />
        </section>
        <Footer />
      </section>
    </>
  );
}

export default App;
