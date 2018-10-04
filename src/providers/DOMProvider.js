import fixtures from "../fixtures";
const ROWS = 5;

export default class DOMProvider {
  constructor() {
    this.game = document.querySelector("#game");
    this.changelog = document.querySelector("#changelog tbody");
    this._countIteration = 0;
    this._countOnIsolation = 0;
    this._countOnLive = 0;
    this._countOnReproduction = 0;
    this._countOnOverPopulation = 0;
    while (this.game.firstChild) {
      this.game.removeChild(this.game.firstChild);
    }
    while (this.changelog.firstChild) {
      this.changelog.removeChild(this.changelog.firstChild);
    }
  }

  grid = (sizeX, sizeY) => {
    return [...Array(sizeY)].map(() => {
      return [...Array(sizeX)].map(() => {
        return Boolean(Math.round(Math.random()));
      });
    });
  };

  onIteration = grid => {
    !this.gridCreated && this._createGrid(grid);
    this._changeGrid(grid);
    this._countIteration++;
    this._createTable();
    this._countOnIsolation = 0;
    this._countOnLive = 0;
    this._countOnOverPopulation = 0;
    this._countOnReproduction = 0;
  };

  _createTable = () => {
    this.changelog.appendChild(this._createTableRow());
  };

  _createTableRow = () => {
    const element = document.createElement("tr");
    const length = document.getElementsByClassName("t_row").length;
    if (this.changelog.children.length > ROWS) {
      this.changelog.removeChild(this.changelog.firstChild);
    }
    element.classList.add("t_row");
    element.appendChild(this._createTableCell(this._countIteration));
    element.appendChild(this._createTableCell(this._countOnIsolation));
    element.appendChild(this._createTableCell(this._countOnLive));
    element.appendChild(this._createTableCell(this._countOnOverPopulation));
    element.appendChild(this._createTableCell(this._countOnReproduction));
    return element;
  };

  _createTableCell = count => {
    const element = document.createElement("td");
    element.classList.add("t_cell");
    element.appendChild(this._createTextNode(count));
    return element;
  };

  _createTextNode = count => {
    const element = document.createElement("div");
    element.classList.add("div_txt");
    element.appendChild(this._insertText(count));
    return element;
  };

  _insertText = count => {
    const element = document.createElement("text");
    element.innerText = count;
    return element;
  };

  onIsolation = () => {
    this._countOnIsolation++;
  };
  onLive = () => {
    this._countOnLive++;
  };
  onOverPopulation = () => {
    this._countOnOverPopulation++;
  };

  onReproduction = () => {
    this._countOnReproduction++;
  };

  _changeGrid = grid => {
    grid.forEach((row, rowIndex) => {
      row.forEach((alive, columnIndex) => {
        const classes = this.game.children[rowIndex].children[columnIndex].classList;
        if (alive) {
          classes.add("alive");
          classes.remove("dead");
        } else {
          classes.add("dead");
          classes.remove("alive");
        }
      });
    });
  };

  _createGrid = grid => {
    grid.forEach(row => {
      this.game.appendChild(this._createGameRow(row));
    });
    this.gridCreated = true;
  };

  _createGameRow = row => {
    const element = document.createElement("div");

    element.classList.add("row");
    row.forEach(() => element.appendChild(this._createCell()));
    return element;
  };

  _createCell = () => {
    const element = document.createElement("div");
    element.classList.add("cell");
    return element;
  };
}
