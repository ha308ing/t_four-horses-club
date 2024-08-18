import { Cards, CarouselControls, Heading2wSubHeading } from "../../components";
import styles from "./VasyukiSteps.module.css";
import { stepsVasyuki as strings } from "../../data";
import { useRef } from "react";

const elements: HTMLLIElement[] = [];

export const VasyukiSteps = () => {
  const ref = useRef(null);
  const setScrollElement = (index: number) => (element: HTMLLIElement) => {
    // 0-1 2 3 4-5 6 7
    const tempIndex = index > 4 ? index - 2 : index > 1 ? index - 1 : index;
    elements[tempIndex] = element;
  };

  return (
    <section className={styles.container}>
      <Heading2wSubHeading
        heading="Этапы преображения Васюков"
        subheading="
        Будущие источники обогащения васюкинцев"
        className={styles.heading}
      />
      <div className={styles.steps}>
        <Cards refCreator={setScrollElement} strings={strings} ref={ref} />
      </div>
      <CarouselControls
        size={5}
        isDigital={false}
        withDisabled={true}
        className={styles.controls}
        nextHandler={(index) => {
          elements[index].scrollIntoView({
            block: "nearest",
            inline: "center",
          });
        }}
        prevHandler={(index) => {
          elements[index].scrollIntoView({
            block: "nearest",
            inline: "center",
          });
        }}
      />
    </section>
  );
};
