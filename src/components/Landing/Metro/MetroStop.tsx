import { MetroStopComponent } from "../../../models/metro-stop";
import styles from "./MetroStop.module.css";

const MetroStop = (props: MetroStopComponent) => {
  const outerClasses = `${styles.outer} ${props.type && styles[props.type]} ${
    props.station === "blank" && styles.blank
  } ${props.station === "last" && styles.last}`;
  const innerClasses = `${styles["metro_stop"]} ${
    !props.children &&
    (props.station ? styles[props.station] : styles.undefined)
  }`;
  return (
    <div className={outerClasses}>
      <div className={innerClasses}>{props.children}</div>
    </div>
  );
};

export default MetroStop;
