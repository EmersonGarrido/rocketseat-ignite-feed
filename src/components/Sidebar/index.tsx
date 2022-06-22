import React from 'react';
import { PencilLine } from 'phosphor-react';
import BackgroundImageSidebar from '../../assets/background.png'
import styles from './style.module.css'

const Sidebar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={BackgroundImageSidebar} />
      <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/EmersonGarrido.png" alt="Emerson Garrido" />
        <strong>Emerson Garrido</strong>
        <span>Fullstack</span>
      </div>
      <footer>

        <a href=""><PencilLine size={20} /> Editar seu perfil</a>
      </footer>
    </aside>
  );
}

export default Sidebar;