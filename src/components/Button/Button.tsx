import { FC, ReactNode } from "react";
import styles from "./Button.module.css";

interface IProps {
  primary?: boolean;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Button: FC<IProps> = ({
  children,
  primary = false,
  className = "",
  onClick,
}) => (
  <button
    className={`${styles.button} ${primary ? styles.primary : ""} ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

interface IButtonLinkProps extends IProps {
  href: string;
}

export const ButtonLink: FC<IButtonLinkProps> = ({
  href,
  children,
  className,
  primary,
}) => (
  <a
    className={`${styles.button} ${primary ? styles.primary : ""} ${className}`}
    href={href}
  >
    {children}
  </a>
);
