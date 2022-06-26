import styles from "./Section.module.css";

type SectionModel = {
  children: React.ReactNode;
  className?: string;
};

const Section = (props: SectionModel) => {
  const classes = `${styles.section} ${props.className}`;
  return <section className={classes}>{props.children}</section>;
};

export default Section;
