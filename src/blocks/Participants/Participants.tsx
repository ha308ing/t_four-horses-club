import { FC } from "react";
import styles from "./Participants.module.css";
import {
  Heading2,
  CarouselControls,
  Participants as Component,
} from "../../components";
import { participants as participantsData } from "../../data";
import { useMobile } from "../../hooks";

const elements: HTMLElement[] = [];

export const Participants: FC = () => {
  const { isMobile } = useMobile();

  const groupSize = isMobile ? 1 : 3;

  const setScrollElement = (index: number) => (element: HTMLElement) => {
    elements[index * groupSize] = element;
  };

  return (
    <section className={styles.container}>
      <Heading2 className={styles.heading}>Участники турнира</Heading2>
      <div className={styles.participants}>
        <Component
          participants={participantsData}
          groupSize={groupSize}
          refCreator={setScrollElement}
        />
      </div>
      <CarouselControls
        size={participantsData.length}
        isDigital={true}
        withDisabled={false}
        step={groupSize}
        className={styles.controls}
        nextHandler={(index) => {
          elements[
            index % groupSize ? Math.floor(index - (index % groupSize)) : index
          ].scrollIntoView({
            block: "nearest",
            inline: "center",
          });
        }}
        prevHandler={(index) => {
          elements[
            index % groupSize ? Math.floor(index - (index % groupSize)) : index
          ].scrollIntoView({
            block: "nearest",
            inline: "center",
          });
        }}
      />
    </section>
  );
};
