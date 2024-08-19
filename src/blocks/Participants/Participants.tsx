import { FC, useCallback, useRef } from "react";
import styles from "./Participants.module.css";
import {
  Heading2,
  CarouselControls,
  Participants as Component,
} from "../../components";
import { participants as participantsData } from "../../data";
import { useMobile } from "../../hooks";
import { ANCHORS } from "../../anchors";

export const Participants: FC = () => {
  const { isMobile } = useMobile();
  const containerRef = useRef<HTMLDivElement>(null);

  const groupSize = isMobile ? 1 : 3;

  const scrollHandler = useCallback((index: number) => {
    containerRef.current?.scrollTo(index * containerRef.current.clientWidth, 0);
  }, []);

  return (
    <section className={styles.container} id={ANCHORS.TOURNAMENT}>
      <Heading2 className={styles.heading}>Участники турнира</Heading2>
      <div className={styles.participants}>
        <Component
          participants={participantsData}
          groupSize={groupSize}
          ref={containerRef}
        />
      </div>
      <CarouselControls
        size={participantsData.length}
        isDigital={true}
        withDisabled={false}
        step={groupSize}
        className={styles.controls}
        nextHandler={scrollHandler}
        prevHandler={scrollHandler}
        autoScroll={true}
      />
    </section>
  );
};
