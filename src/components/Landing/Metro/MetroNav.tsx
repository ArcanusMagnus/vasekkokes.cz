import { v4 as uuidv4 } from "uuid";
import MetroStopModel from "../../../models/metro-stop";

import Section from "../../UI/Section";
import MetroGrid from "./MetroGrid";
import styles from "./MetroNav.module.css";

const STOPS_DATA: MetroStopModel[] = [
  {
    id: uuidv4(),
    label: "Ornament and rhythm",
    events: "blank",
    visual: "blank",
    writing: "active",
    ideas: "blank",
  },
  {
    id: uuidv4(),
    label: "][",
    events: "active",
    visual: "active",
    writing: "active",
    ideas: "active",
  },
  {
    id: uuidv4(),
    label: "Ornamental tapestry",
    label_left: true,
    visual: "active",
    ideas: "active",
  },
  {
    id: uuidv4(),
    label: "Contemporary Czech Architecture",
    label_left: true,
    visual: "active",
    writing: "active",
  },
  {
    id: uuidv4(),
    label: "Display",
    label_left: true,
    visual: "active",
    ideas: "active",
  },
];

const MetroNav = () => {
  return (
    <Section className={styles.MetroNav}>
      <MetroGrid data={STOPS_DATA} />
    </Section>
  );
};

export default MetroNav;
