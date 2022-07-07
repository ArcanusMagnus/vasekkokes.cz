import { v4 as uuidv4 } from "uuid";

import MetroStopModel, { StationType } from "../../../models/metro-stop";
import { ArticleContent, ArticleModel } from "../../../models/article-model";
import Section from "../../UI/Section";
import MetroGrid from "./MetroGrid";
import styles from "./MetroNav.module.css";
import data from "../../../data/data.json"


const processedData: MetroStopModel[] = [];

for(const article of data){
  processedData.push({
    id: uuidv4(),
    label: article.label,
    label_left: article.label_left ?? false,
    events: article.events ? "active" : undefined,
    visual: article.visual ? "active" : undefined,
    writing: article.writing ? "active" : undefined,
    ideas: article.ideas ? "active" : undefined
  })
}

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
    label: "Display",
    label_left: true,
    visual: "active",
    ideas: "active",
  },
  {
    id: uuidv4(),
    label: "The Artist, The Curator",
    events: "active",
    ideas: "active",
  },
  {
    id: uuidv4(),
    label: "Psy-High Festival",
    label_left: true,
    visual: "active",
    events: "active",
    writing: "active",
  },
  {
    id: uuidv4(),
    label: "Fource Entertainment",
    visual: "active",
    events: "active",
    writing: "active",
    ideas: "active",
  },
  {
    id: uuidv4(),
    label: "Žižkovská noc",
    label_left: true,
    visual: "active",
    events: "active",
    ideas: "active",
  },
  {
    id: uuidv4(),
    label: "Jednota",
    visual: "active",
    events: "active",
    writing: "active",
    ideas: "active",
  },
  {
    id: uuidv4(),
    label: "Paioneers",
    label_left: true,
    visual: "active",
    ideas: "active",
  },
  {
    id: uuidv4(),
    label: "The Nexus",
    label_left: true,
    visual: "active",
    writing: "last",
  },
  {
    id: uuidv4(),
    label: "",
    events: "last",
    writing: "blank",
    ideas: "last",
  },
  {
    id: uuidv4(),
    label: "",
    visual: "last",
    events: "blank",
    writing: "blank",
    ideas: "blank",
  },
];


const MetroNav = () => {
  return (
    <Section className={styles.MetroNav}>
      <MetroGrid data={processedData} />
    </Section>
  );
};

export default MetroNav;
