import { forwardRef } from "react";
import styles from "./Card.module.css";

interface ICardsProps {
  strings: string[];
  refCreator?: (index: number) => (element: HTMLLIElement) => void;
}

export const Cards = forwardRef<HTMLUListElement, ICardsProps>(
  ({ strings, refCreator }, ref) => {
    return (
      <div className={styles.container}>
        <ul className={styles.cards} ref={ref}>
          {strings.map((string, index) => {
            return (
              <li
                key={index}
                className={styles.card}
                ref={refCreator && refCreator(index)}
              >
                {string}
              </li>
            );
          })}
        </ul>
        <img src="/assets/plane.png" className={styles.image} />
      </div>
    );
  },
);
