import { Button, Logo, Text } from "../../components";
import styles from "./Hero.module.css";

export const Hero = () => (
  <section className={styles.container}>
    <div className={styles.block}>
      <Logo className={styles.logo} />
      <div className={styles.content}>
        <Text className={styles.paragraph} block={true} uppercase={true}>
          Превратите уездный город
        </Text>
        <Text block={true} className={styles.paragraph} uppercase={true}>
          в столицу <span className={styles.sphere}>земного шара</span>
        </Text>
        <Text className={styles.paragraph} sans={true} block={true}>
          Оплатите взнос на телеграммы для организации Международного
          васюкинского турнира по шахматам
        </Text>

        <div className={styles.buttons}>
          <Button primary={true} className={styles.button}>
            <span className={styles.firstWord}>Поддержать</span> шахматную мысль
          </Button>

          <Button className={styles.button}>
            <span className={styles.firstWord}>Подробнее</span> о турнире
          </Button>
        </div>
      </div>
    </div>
  </section>
);
