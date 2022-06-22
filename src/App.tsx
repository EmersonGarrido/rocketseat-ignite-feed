import { Header, Post, Sidebar } from "./components";
import './global.css';
import styles from './App.module.css';
function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          <Post />
        </main>
      </div>

    </div>
  );
}

export default App;
