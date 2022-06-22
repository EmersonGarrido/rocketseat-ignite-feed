import { ThumbsUp, Trash } from "phosphor-react";
import React from "react";

import styles from "./styles.module.css";

const Comment: React.FC = () => {
  return (
    <div className={styles.comment}>
      <img
        className={styles.avatar}
        src="https://github.com/EmersonGarrido.png"
        alt="Emerson Garrido"
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Emerson Garrido</strong>
              <time
                title="11 de maio de 2022 as 08:13"
                dateTime="2022-05-11 08:13:30"
              >
                Publicado há
              </time>
            </div>
            <button title="Deletar cometario">
              <Trash size={20} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer className={styles.footer}>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>

    </div>
  );
};

export default Comment;
