import { FC, ReactNode } from "react";
import styles from "./Footer.module.css";

interface IProps {
  children: ReactNode;
}

export const Footer: FC<IProps> = ({ children }) => (
  <footer className={styles.footer}>{children}</footer>
);
