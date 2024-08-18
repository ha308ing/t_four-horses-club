import { FC, ReactNode } from "react";
import styles from "./Button.module.css";

interface IProps {
  primary?: boolean;
  children: ReactNode;
  className?: string;
}

export const Button: FC<IProps> = ({
  children,
  primary = false,
  className = "",
}) => (
  <button
    className={`${styles.button} ${primary ? styles.primary : ""} ${className}`}
  >
    {children}
  </button>
);
