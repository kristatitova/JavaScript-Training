// prettier-ignore
const POSITIONS = [
  [-1,-1],[-1, 0],[-1, 1],
[ 0,-1],        [ 0, 1],
[ 1,-1],[ 1, 0],[ 1, 1]];

class GameOfLife {
  constructor(initialGrid, provider) {
    this.grid = [...initialGrid]; //šis veido kopiju no tā, kas tiek padots
    this.provider = provider;
    this.size = this.grid.length;
  }

  start() {
    this._iterate();
  }

  _iterate() {
    const newGrid = [];
    this.grid.forEach((row, columnIndex) => {
      const newRow = [];
      row.forEach((element, rowIndex) => {
        const neighbours = this._countNeighbours(columnIndex, rowIndex);
        // neighbours && console.log(neighbours, columnIndex, rowIndex);

        if (element) {
          if (neighbours < 2) {
            newRow.push(false);
            this.provider.onIsolation(columnIndex, rowIndex);
          } else if (neighbours === 2 || neighbours === 3) {
            newRow.push(true);
            this.provider.onLive(columnIndex, rowIndex);
          } else if (neighbours > 3) {
            newRow.push(false);
            this.provider.onOverpopulation(columnIndex, rowIndex);
          }
        } else {
          if (neighbours === 3) {
            newRow.push(true);
            this.provider.onReproduction(columnIndex, rowIndex);
          } else {
            newRow.push(element);
          }
        }
      });
      newGrid.push(newRow);
    });

    this.provider.onIteration(newGrid);
  }

  _countNeighbours(column, row) {
    let count = 0;

    POSITIONS.forEach(([x, y]) => {
      const posY = column + y;
      const posX = row + x;
      if (this._outOfBounds(posX, posY)) return;
      count += Number(this.grid[posY][posX]);
    });
    return count;
  }
  _outOfBounds(posX, posY) {
    return posX < 0 || posY < 0 || posX >= this.size || posY >= this.size;
  }
}

module.exports = {
  GameOfLife: GameOfLife
};
