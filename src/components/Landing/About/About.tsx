import Section from "../../UI/Section";
import styles from "./About.module.css";
import Socials from "./Socials";

const About = () => {
  return (
    <Section className={styles.about}>
      <h2>About me</h2>
      <div className={styles.avatar}></div>
      <p>
        My name is Vašek Kokeš and I am striving to be the one who boldly goes
        where no man has gone before. I work as a graphic designer and cultural
        event promoter. Art is the main interest of my life so I decided to
        study it thoroughly – practically on UMPRUM, Prague and theoretically at
        the Art history department of Philosophical Faculty of Charles
        University, Prague. Besides many of my own art projects, I helped to
        curate multiple exhibitions and wrote several theoretical texts. Later,
        I studied a semester in Raumlabor Berlin studio and was honoured by
        Czech-German Future Fond scholarship to study architecture in Germany.
        <br />
        Beside projects mentione above, I also worked for Samsung, Czech
        European presidency, LaSvit, Minstry of Culture of Czech Republic and
        many more. I am always open to learn new things and work on new
        interesting projects. My goal is to create and provide accessible and
        well thought out design both for niche audiences as well as for masses
        with high attention to detail.
        <br />
        If you would like to collaborate with me on a future project, please
        don&apos;t hesitate to contact me.
      </p>
      <Socials
        // facebook="https://www.facebook.com/vasek.kokes"
        behance="https://www.behance.net/vasekkokes"
        linkedin="https://www.linkedin.com/in/vasekkokes"
        email="mailto:vasek.kokes@gmail.com"
        instagram="https://www.instagram.com/vasekkokes/"
      />
      <p className={styles.contact}>
        Václav Kokeš
        <br />
        Lucemburská 1497/6, 130 00, Praha 3 - Vinohrady
        <br />
        IČO: 02234131
      </p>
    </Section>
  );
};

export default About;
