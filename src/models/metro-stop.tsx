type MetroStopModel = {
  id: string;
  label: string;
  label_left?: boolean;
  visual?: "active" | "blank" | undefined;
  events?: "active" | "blank" | undefined;
  ideas?: "active" | "blank" | undefined;
  writing?: "active" | "blank" | undefined;
};

export default MetroStopModel;
