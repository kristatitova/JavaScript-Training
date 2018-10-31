//
const TABLE_ELEMENTS = ["iteration", "isolation", "live", "overPopulation", "reproduction"];

export default class ReactProvider {
  constructor(reactRef) {
    this.counter = this._resetCounter();
    this.reactRef = reactRef;
  }

  onIteration = grid => {
    this.reactRef.onIteration(grid, this.counter);
    this.counter = { ...this._resetCounter(), iteration: this.counter.iteration + 1 };
  };

  onIsolation = () => {
    this.counter.isolation++;
  };
  onLive = () => {
    this.counter.live++;
  };
  onOverPopulation = () => {
    this.counter.overPopulation++;
  };
  onReproduction = () => {
    this.counter.reproduction++;
  };

  grid = (sizeX, sizeY) => {
    return [...Array(sizeY)].map(() => {
      return [...Array(sizeX)].map(() => Boolean(Math.round(Math.random())));
    });
  };

  _resetCounter = () => {
    return TABLE_ELEMENTS.reduce((acc, rule) => ({ ...acc, [rule]: 0 }), {});
  };
}
