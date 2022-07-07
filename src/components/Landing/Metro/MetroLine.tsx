import { useState } from "react";
import { Link } from "react-router-dom";

import { MetroData } from "../../../models/metro-stop";
import MetroStop from "./MetroStop";

import styles from "./MetroLine.module.css";

const MetroLine = (props: { line: MetroData[]; label?: boolean }) => {
  const [isFirst, setIsFirst] = useState(true);

  const content = props.line.map((item) => {
    let station = item.station;
    if (isFirst) {
      if (!station) {
        station = "blank";
      }
      setIsFirst(false);
    }

    const content = props.label ? (
      <Link to={`/${item.content!.replace(/\W/g, "_")}`}>{item.content}</Link>
    ) : (
      item.content
    );

    return (
      <MetroStop id={item.id} type={item.type} station={item.station}>
        {content}
      </MetroStop>
    );
  });

  const classes = `${styles.line} ${props.label && styles.label}`;
  return <div className={classes}>{content}</div>;
};

export default MetroLine;
