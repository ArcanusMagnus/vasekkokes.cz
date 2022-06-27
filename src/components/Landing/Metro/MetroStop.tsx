import MetroStopModel from "../../../models/metro-stop";
import styles from "./MetroStop.module.css";

const MetroStop = (props: MetroStopModel) => {
  const labelLeft =
    props.label && props.label_position === "left" ? (
      <td>{props.label}</td>
    ) : (
      <td></td>
    );

  const labelRight =
    props.label && props.label_position === "right" ? (
      <td>{props.label}</td>
    ) : (
      <td></td>
    );

  const visual = props.visual
    ? props.visual === "active"
      ? "active"
      : "blank"
    : "undefined";

  const events = props.events
    ? props.events === "active"
      ? "active"
      : "blank"
    : "undefined";

  const ideas = props.ideas
    ? props.ideas === "active"
      ? "active"
      : "blank"
    : "undefined";

  const writing = props.writing
    ? props.writing === "active"
      ? "active"
      : "blank"
    : "undefined";

  const visualStyles = `${styles.visual} ${styles[visual]}`;
  const eventsStyles = `${styles.events} ${styles[events]}`;
  const ideasStyles = `${styles.ideas} ${styles[ideas]}`;
  const writingStyles = `${styles.writing} ${styles[writing]}`;

  return (
    <tr key={props.id}>
      <td className={styles.label}>{labelLeft}</td>
      <td className={visualStyles}></td>
      <td className={eventsStyles}></td>
      <td className={writingStyles}></td>
      <td className={ideasStyles}></td>
      <td className={styles.label}>{labelRight}</td>
    </tr>
  );
};

export default MetroStop;
