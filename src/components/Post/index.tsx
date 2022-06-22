import React from "react";

import styles from "./styles.module.css";

const Post: React.FC = () => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/EmersonGarrido.png"
            alt=""
          />
          <div className={styles.authorInfo}>
            <strong>Emerson Garrido</strong>
            <span>Fullstack</span>
          </div>

        </div>
        <time
          title="11 de maio de 2022 as 08:13"
          dateTime="2022-05-11 08:13:30"
        >
          Publicado há
        </time>
      </header>
      <div className={styles.content}>
        <p> Fala galeraa 👋 </p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare
          🚀
        </p>
        <p>
          <a href="">jane.design/doctorcare </a>
        </p>

        <p>
          <a href="">#novoprojeto</a>{" "}
          <a href="">#nlw</a>{" "}
          <a href="">#Rocketseat</a>
        </p>
      </div>
    </article>
  );
};

export default Post;
