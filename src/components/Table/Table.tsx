import { FC, ReactNode } from "react";
import styles from "./Table.module.css";

interface IProps {
  content: Record<
    string,
    string | ReactNode | { oldPrice: string; newPrice: string }
  >;
  className?: string;
}

export const Table: FC<IProps> = ({ content, className = "" }) => {
  return (
    <table className={`${styles.table} ${className}`}>
      <tbody>
        {Object.entries(content).map(([key, value], index) => (
          <tr key={index} className={styles.row}>
            <td className={styles.key}>{key}</td>
            <td className={styles.value}>
              {isPrice(value) ? (
                <span>
                  {value.oldPrice && (
                    <span className={styles.oldPrice}>{value.oldPrice}</span>
                  )}

                  <span>{value.newPrice}</span>
                </span>
              ) : (
                value
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

interface IPrice {
  oldPrice: string;
  newPrice: string;
}

function isPrice(value: ReactNode | IPrice): value is IPrice {
  return Object.prototype.hasOwnProperty.call(value, "oldPrice");
}
