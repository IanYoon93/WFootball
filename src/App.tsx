import styles from './App.module.css';
import Footer from './Components/Common/Footer';
import Header from './Components/Common/Header';
import MainView from './Components/Main/MainView';

function App() {
  return (
    <>
      <section className={styles.wrap}>
        <Header />
        <MainView />
        <Footer />
      </section>
    </>
  );
}

export default App;
