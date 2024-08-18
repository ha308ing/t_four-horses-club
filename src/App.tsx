import {
  Participants,
  Footer,
  MovingLine,
  VasyukiSteps,
  Content,
  Hero,
} from "./blocks";

export const App = () => (
  <>
    <Hero />
    <MovingLine />
    <Content />
    <VasyukiSteps />
    <Participants />
    <MovingLine />
    <Footer>
      Все персонажи, события и цитаты являются вымышленными и не принадлежат
      создателям сайта. С подробностями можно познакомиться в главе XXXIV романа
      Ильи Ильфа и Евгения Петрова «Двенадцать стульев».
    </Footer>
  </>
);
