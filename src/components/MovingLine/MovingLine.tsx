import { FC } from "react";
import styles from "./MovingLine.module.css";

interface IProps {
  strings: string[];
  speed?: number;
  divider?: string;
}

const TARGET_LENGTH = 800;

export const MovingLine: FC<IProps> = ({
  strings,
  speed = 45,
  divider = "\u25cf",
}) => {
  const stringsLength = strings.reduce(
    (length, string) => (length += string.length),
    0,
  );
  const stringsExtended = Array.from(
    {
      length:
        TARGET_LENGTH < stringsLength
          ? 1
          : Math.floor(TARGET_LENGTH / stringsLength),
    },
    () => strings,
  ).flat();

  return (
    <div className={styles.container}>
      <ul
        className={styles.list}
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {stringsExtended.map((string, index) => (
          <li key={index} className={styles.lineString} data-divider={divider}>
            {string}
          </li>
        ))}
      </ul>
    </div>
  );
};
