type MetroStopModel = {
  id: string;
  label: string;
  label_left?: boolean;
  visual?: StationType;
  events?: StationType;
  ideas?: StationType;
  writing?: StationType;
};

export type StationType = "active" | "blank" | undefined;

export type MetroData = {
  id: string;
  station?: StationType;
  type?: string;
  content?: string;
};

export type MetroStopComponent = MetroData & {
  children?: React.ReactNode;
};

export default MetroStopModel;
