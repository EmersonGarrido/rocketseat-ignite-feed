import React from "react";
import styles from "./styles.module.css";

import igniteLogo  from '../../assets/logo.png'

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.contentLogo}>
        <img src={igniteLogo} />
        <h1>Ignite Feed</h1>
      </div>
    </div>
  );
};

export default Header;
