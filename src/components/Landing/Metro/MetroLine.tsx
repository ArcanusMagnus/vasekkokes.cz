import React from "react";

import styles from "./MetroLine.module.css";

const MetroLine = (props: { line: React.ReactNode[]; label?: boolean }) => {
  const content = props.line.map((item) => item);
  const classes = `${styles.line} ${props.label && styles.label}`;
  console.log(classes);
  return <div className={classes}>{content}</div>;
};

export default MetroLine;
