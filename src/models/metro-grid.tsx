class MetroGridModel {
  readonly lines?: number = 4;
  constructor(
    public stops: number,
    public colors: [string, string, string, string]
  ) {}
}

export default MetroGridModel;
