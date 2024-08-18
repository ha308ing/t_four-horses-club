import { FC, ReactNode } from "react";
import styles from "./Text.module.css";

interface IProps {
  uppercase?: boolean;
  highlight?: boolean;
  subtle?: boolean;
  children: ReactNode;
  block?: boolean;
  sans?: boolean;
  className?: string;
}

export const Text: FC<IProps> = ({
  children,
  highlight = false,
  subtle = false,
  uppercase = false,
  block = false,
  sans = false,
  className = "",
}) => (
  <span
    className={`${styles.text} ${highlight ? styles.highlight : ""}
${subtle ? styles.subtle : ""}
${block ? styles.block : ""}
${sans ? styles.sans : ""}
${uppercase ? styles.uppercase : ""} ${className}`}
  >
    {children}
  </span>
);
