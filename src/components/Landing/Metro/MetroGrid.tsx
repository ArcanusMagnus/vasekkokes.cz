import { v4 as uuidv4 } from "uuid";

import MetroLine from "./MetroLine";
import MetroStopModel from "../../../models/metro-stop";
import styles from "./MetroGrid.module.css";

const MetroGrid = (props: { data: MetroStopModel[] }) => {
  const label_left: React.ReactNode[] = [];
  const label_right: React.ReactNode[] = [];
  const visual: React.ReactNode[] = [];
  const events: React.ReactNode[] = [];
  const writing: React.ReactNode[] = [];
  const ideas: React.ReactNode[] = [];

  for (const line of props.data) {
    if (line.label_left) {
      label_left.push(<div key={uuidv4()}>{line.label}</div>);
      label_right.push(<div key={uuidv4()}></div>);
    } else {
      label_right.push(<div key={uuidv4()}>{line.label}</div>);
      label_left.push(<div key={uuidv4()}></div>);
    }


    /* NEEDS TO BE REDONE - pass only data, not JSX components */
    visual.push(
      <div
        className={`${styles.visual} ${
          line.visual ? styles[line.visual] : styles.undefined
        }`}
        key={line.id}
      ></div>
    );
    events.push(
      <div
        className={`${styles.events} ${
          line.events ? styles[line.events] : styles.undefined
        }`}
        key={line.id}
      ></div>
    );
    writing.push(
      <div
        className={`${styles.writing} ${
          line.writing ? styles[line.writing] : styles.undefined
        }`}
        key={line.id}
      ></div>
    );
    ideas.push(
      <div
        className={`${styles.ideas} ${
          line.ideas ? styles[line.ideas] : styles.undefined
        }`}
        key={line.id}
      ></div>
    );
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
  //   return (
  //     <table className={styles.MetroGrid}>
  //       <MetroStop id="1" writing="active" />
  //       <MetroStop
  //         id="2"
  //         visual="active"
  //         events="active"
  //         writing="active"
  //         ideas="active"
  //       />
  //       <MetroStop id="3" visual="active" ideas="active" />
  //       <MetroStop id="4" />
  //       <MetroStop id="5" />
  //       <MetroStop id="6" />
  //       <MetroStop id="7" />
  //     </table>
  //   );
};

export default MetroGrid;
