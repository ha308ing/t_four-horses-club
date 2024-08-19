import { Text } from "../../components";
import { tableSchedule as tableContent } from "../../data/tableSchedule";
import { Table } from "../../components";
import styles from "./Content.module.css";
import { ANCHORS } from "../../anchors";

const VisitText = ({ className = "" }) => (
  <Text block={false} className={`${styles.paragraph} ${className}`}>
    посетите лекцию на тему:{" "}
    <Text block={true} highlight={true}>
      «Плодотворная дебютная идея»
    </Text>
  </Text>
);

export const Content = () => (
  <section className={styles.container} id={ANCHORS.SUPPORT}>
    <Text block={true} uppercase={true} className={styles.paragraph}>
      <Text block={true}>Чтобы поддержать</Text> Международный васюкинский
      турнир <VisitText className={styles.visitTextDesktop} />
    </Text>

    <img
      src="./assets/players.png"
      alt="4 guys playing chess on one board in the back, and one guy on the front lpaying by himself black vs black"
      className={styles.imagePlayers}
    />

    <VisitText className={styles.visitTextMobile} />

    <img
      src="./assets/player.png"
      alt="a pawn beats a knight, a player playing with black has hard time thinking"
      className={styles.imagePlayer}
    />

    <Text block={true} uppercase={true} className={styles.paragraph}>
      и Сеанс{" "}
      <Text highlight={true}>одновременной игры в шахматы на 160 досках</Text>{" "}
      гроссмейстера О. Бендера
    </Text>

    <div className={styles.table}>
      <Table content={tableContent} />
    </div>

    <Text block={true} subtle={true} sans={true} className={styles.note}>
      По всем вопросам обращаться в администрацию к К. Михельсону
    </Text>
  </section>
);
