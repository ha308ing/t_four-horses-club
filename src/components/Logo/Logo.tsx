import { FC } from "react";
import styles from "./Logo.module.css";

interface IProps {
  className?: string;
}

export const Logo: FC<IProps> = ({ className = "" }) => (
  <div className={`${styles.container} ${className}`}>
    <div className={styles.image}>
      <img src="./assets/logo.svg" />
    </div>
    <div className={styles.text}>
      клуб
      <br />
      четырех коней
    </div>
  </div>
);
