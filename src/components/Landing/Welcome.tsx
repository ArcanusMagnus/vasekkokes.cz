import Section from "../UI/Section";
import styles from "./Welcome.module.css";

const Welcome = () => {
  const greetings = ["Hello!", "Hallo!", "Ahoj!", "Salve!"];

  const greetingNo = Math.floor(Math.random() * greetings.length);
  const greeting = greetings[greetingNo];

  return (
    <Section className={styles.welcome}>
      <div>
        <h1>{greeting}</h1>
        <p>
          My name is Vašek and welcome to my page. I work in multiple creative
          fields: visual, event promotion, writing and I also have a lot of
          ideas. These fields meet each other in different projects. If you want
          to discover some of them, just follow the lines!
        </p>
      </div>
    </Section>
  );
};

export default Welcome;
