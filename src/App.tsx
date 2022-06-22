import { Header, Post, Sidebar } from "./components";
import './global.css';
import styles from './App.module.css';
function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post />
          <Post />
          <Post />
        </main>
      </div>

    </div>
  );
}

export default App;
