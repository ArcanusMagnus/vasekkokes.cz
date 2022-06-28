import { v4 as uuidv4 } from "uuid";

import MetroLine from "./MetroLine";
import MetroStopModel, { MetroData } from "../../../models/metro-stop";
import styles from "./MetroGrid.module.css";

const MetroGrid = (props: { data: MetroStopModel[] }) => {
  const label_left: MetroData[] = [];
  const label_right: MetroData[] = [];
  const visual: MetroData[] = [];
  const events: MetroData[] = [];
  const writing: MetroData[] = [];
  const ideas: MetroData[] = [];

  for (const item of props.data) {
    if (item.label_left) {
      label_left.push({ id: uuidv4(), content: item.label });
      label_right.push({ id: uuidv4(), content: "" });
    } else {
      label_right.push({ id: uuidv4(), content: item.label });
      label_left.push({ id: uuidv4(), content: "" });
    }

    visual.push({
      type: 'visual',
      station: item.visual ?? undefined,
      id: item.id,
    });

    events.push({
      type: 'events',
      station: item.events ?? undefined,
      id: item.id,
    });

    writing.push({
      type: 'writing',
      station: item.writing ?? undefined,
      id: item.id,
    });

    ideas.push({
      type: 'ideas',
      station: item.ideas ?? undefined,
      id: item.id,
    });
  }

  return (
    <>
      <MetroLine line={label_left} label />
      <MetroLine line={visual} />
      <MetroLine line={events} />
      <MetroLine line={writing} />
      <MetroLine line={ideas} />
      <MetroLine line={label_right} label />
    </>
  );
};

export default MetroGrid;
