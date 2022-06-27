import React from "react";

import styles from "./MetroLine.module.css";

const MetroLine = (props: { line: React.ReactNode[] }) => {
  let content = props.line.map(item => item);
  console.log(content);
  return <div className={styles.line}>{content}</div>;
};

export default MetroLine;
