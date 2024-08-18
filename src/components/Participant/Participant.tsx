import { forwardRef } from "react";
import styles from "./Participant.module.css";

interface IParticipant {
  name: string;
  title: string;
  avatar?: string;
}

interface IProps {
  participant: IParticipant;
}

const defaultAvatar = "./assets//participant.svg";

export const Participant = forwardRef<HTMLElement, IProps>(
  ({ participant }, ref) => {
    const { name, title, avatar = defaultAvatar } = participant;

    return (
      <section className={styles.container} ref={ref}>
        <section className={styles.imageContainer}>
          <img src={avatar} className={styles.image} />
        </section>
        <div className={styles.name}>{name}</div>
        <div className={styles.title}>{title}</div>
        <button className={styles.button}>Подробнее</button>
      </section>
    );
  },
);

interface IParticipantsProps {
  groupSize?: number;
  participants: IParticipant[];
  refCreator: (index: number) => (element: HTMLDivElement) => void;
}

export const Participants = forwardRef<HTMLDivElement, IParticipantsProps>(
  ({ participants, groupSize = 1, refCreator }, ref) => {
    const participantsGroupped = participants.reduce(
      (groups: IParticipant[][], participant) => {
        const currentGroupIndex = groups.length - 1;
        const curretnGroupSize = groups[currentGroupIndex].length;
        const isNewGroupNeeded = curretnGroupSize === groupSize;

        if (isNewGroupNeeded) {
          groups[currentGroupIndex + 1] = [participant];
        } else {
          groups[currentGroupIndex].push(participant);
        }

        return groups;
      },
      [[]],
    );

    return (
      <section className={styles.participants} ref={ref}>
        {participantsGroupped.map((group, index) => (
          <div ref={refCreator(index)} key={index} className={styles.group}>
            {group.map((participant, index) => (
              <Participant participant={participant} key={index} />
            ))}
          </div>
        ))}
      </section>
    );
  },
);
