import { MetroStopComponent } from "../../../models/metro-stop";

const MetroStop = (props: MetroStopComponent) => {
  return (
    <div className={props.className}>
      <div>{props.children}</div>
    </div>
  );
};

export default MetroStop;
