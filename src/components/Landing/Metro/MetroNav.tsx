import { v4 as uuidv4 } from "uuid";
import MetroStopModel from "../../../models/metro-stop";

import Section from "../../UI/Section";
import MetroGrid from "./MetroGrid";
import styles from "./MetroNav.module.css";

const STOPS_DATA: MetroStopModel[] = [
  {
    id: uuidv4(),
    label: "Ornament and rhythm",
    label_position: "right",
    events: "blank",
    visual: "blank",
    writing: "active",
    ideas: "blank",
  },
  {
    id: uuidv4(),
    label: "][",
    label_position: "right",
    events: "active",
    visual: "active",
    writing: "active",
    ideas: "active",
  },
  {
    id: uuidv4(),
    label: "Ornamental tapestry",
    label_position: "left",
    visual: "active",
    ideas: "active",
  },
  {
    id: uuidv4(),
    label: "Contemporary Czech Architecture",
    label_position: "left",
    visual: "active",
    writing: "active",
  },
  {
    id: uuidv4(),
    label: "Display",
    label_position: "left",
    visual: "active",
    ideas: "active",
  },
];

const MetroNav = () => {
  return (
    <Section className={styles.MetroNav}>
      <MetroGrid stops={12} />
    </Section>
  );
};

export default MetroNav;
