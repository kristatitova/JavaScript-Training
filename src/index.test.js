const { GameOfLife } = require("./index");

class TestProvider {
  constructor() {
    this.onIteration = jest.fn();
    this.onIsolation = jest.fn();
    this.onLive = jest.fn();
    this.onOverpopulation = jest.fn();
    this.onReproduction = jest.fn();
  }
}

describe("GameOfLife", () => {
  //konteksts
  const grid = [
    [false, false, false, false, false, false, false],
    [false, true, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false]
  ];

  it("should initialize", () => {
    //soļi
    const provider = new TestProvider({});
    const life = new GameOfLife(grid, provider);

    expect(life).toBeInstanceOf(GameOfLife);
    expect(life.size).toBe(7);
    expect(life.grid).toEqual(grid);
    expect(life.provider).toEqual(provider);
  });
  it("#onIteration", () => {
    const provider = new TestProvider();
    const life = new GameOfLife(grid, provider);
    life.start();

    expect(provider.onIteration).toBeCalledWith([
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false]
    ]);
    // expect(provider.onIsolation).toBeCalledWith();
    // expect(provider.onLive).toBeCalledWith();
    // expect(provider.onOverpopulation).toBeCalledWith();
    // expect(provider.onReproduction).toBeCalledWith();
  });

  it("#onIsolation", () => {
    const provider = new TestProvider();
    const life = new GameOfLife(grid, provider);
    life.start();
    expect(provider.onIsolation).toBeCalledWith(1, 1);
  });

  it("#onLive", () => {
    const provider = new TestProvider();
    const gridOnLive = [
      [false, false, false, false, false, false, false],
      [false, true, true, false, false, false, false],
      [false, false, false, true, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false]
    ];
    const life = new GameOfLife(gridOnLive, provider);
    life.start();
    expect(provider.onLive).toBeCalledWith(1, 2);
  });

  it("#onOverpopulation", () => {
    const provider = new TestProvider();
    const gridOnOverpopulation = [
      [false, false, false, true, false, false, false],
      [false, true, true, true, false, false, false],
      [false, false, false, true, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false]
    ];
    const life = new GameOfLife(gridOnOverpopulation, provider);
    life.start();
    expect(provider.onOverpopulation).toBeCalledWith(1, 2);
  });

  it("#onReproduction", () => {
    const provider = new TestProvider();
    const gridOnReproduction = [
      [false, false, false, true, false, false, false],
      [false, true, false, false, false, false, false],
      [false, false, false, true, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false]
    ];
    const life = new GameOfLife(gridOnReproduction, provider);
    life.start();
    expect(provider.onReproduction).toBeCalledWith(1, 2);
    expect(provider.onIsolation).toBeCalledWith(2, 3);
  });
});
