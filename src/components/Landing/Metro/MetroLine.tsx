import { MetroData } from "../../../models/metro-stop";
import MetroStop from "./MetroStop";

import styles from "./MetroLine.module.css";

const MetroLine = (props: { line: MetroData[]; label?: boolean }) => {
  const content = props.line.map((item) => (
    <MetroStop
      id={item.id}
      type={item.type}
      station={item.station}
    >
      {item.content}
    </MetroStop>
  ));
  const classes = `${styles.line} ${props.label && styles.label}`;
  return <div className={classes}>{content}</div>;
};

export default MetroLine;
