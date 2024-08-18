import { FC, ReactNode } from "react";
import styles from "./Heading.module.css";

interface IProps {
  children: ReactNode;
  className?: string;
}

export const Heading2: FC<IProps> = ({ children, className = "" }) => (
  <h2 className={`${styles.heading2} ${className}`}>{children}</h2>
);

export const SubHeading: FC<IProps> = ({ children, className = "" }) => (
  <div className={`${styles.subheading} ${className}`}>{children}</div>
);

interface IHeading2wSubHeadingProps {
  heading: ReactNode;
  subheading: ReactNode;
  className?: string;
}

export const Heading2wSubHeading: FC<IHeading2wSubHeadingProps> = ({
  heading,
  subheading,
  className = "",
}) => (
  <header className={`${styles.combo} ${className}`}>
    <h2 className={styles.comboHeading2}>{heading}</h2>
    <div className={styles.comboSubHeading}>{subheading}</div>
  </header>
);
