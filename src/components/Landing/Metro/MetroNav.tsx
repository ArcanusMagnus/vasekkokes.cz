import Section from "../../UI/Section";
import MetroGrid from "./MetroGrid";
import styles from "./MetroNav.module.css";

const MetroNav = () => {
  return (
    <Section className={styles.MetroNav}>
      <MetroGrid
        colors={["#afad26", "#ff6133", "#14068d", "#f9ee34"]}
        stops={12}
      />
    </Section>
  );
};

export default MetroNav;
