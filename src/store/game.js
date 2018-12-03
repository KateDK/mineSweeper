import _ from 'lodash';

const easy = {
  rows: 10,
  cols: 10,
  mines: 5,
};

const medium = {
  rows: 20,
  cols: 20,
  mines: 10,
};

const hard = {
  rows: 30,
  cols: 30,
  mines: 15,
};

const cell = {
  isMine: false,
  isOpen: false,
  closeMines: 0,
  row: 0,
  col: 0,
};
export const dificulties = {
  easy,
  medium,
  hard,
};

/**
 * ACTION TYPES
 */

const INITIATE_GAME = 'INITIATE_GAME';
const CLICK_CELL = 'CLICK_CELL';

/**
 * INITIAL STATE
 */
const initialState = {
  grid: [],
  gameWon: false,
  gameOver: false,
  openCells: 0,
  dificulty: easy,
  mines: [],
};

/**
 * ACTION CREATORS
 */
export const initiateGame = dificulty => ({ type: INITIATE_GAME, dificulty });
export const clickCell = (row, col) => ({ type: CLICK_CELL, row, col });

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case INITIATE_GAME: {
      let game = {
        ...initialState,
        dificulty: action.dificulty,
        grid: [],
        mines: [],
      };
      const rows = game.dificulty.rows;
      const cols = game.dificulty.cols;

      for (let row = 0; row < rows; row++) {
        let currentRow = [];
        for (let col = 0; col < cols; col++) {
          currentRow.push({ ...cell, row, col });
        }
        game.grid.push(currentRow);
      }
      placeMines(game.grid, game.dificulty, game.mines);
      return game;
    }
    case CLICK_CELL: {
      let game = _.cloneDeep(state);
      let row = action.row;
      let col = action.col;
      let cell = game.grid[row][col];
      if (cell.isMine) {
        //loop over mines array and open them
        openMines(game.grid, game.mines);
        game.gameOver = true;
      } else {
        //1: openCell function takes gameObj row, col
        openCell(game, row, col);
        //2: check if won
      }
      return game;
    }
    default:
      return state;
  }
}

const placeMines = (grid, dificulty, mines) => {
  let numMines = dificulty.mines;
  while (numMines > 0) {
    let row = Math.floor(Math.random() * grid.length);
    let col = Math.floor(Math.random() * grid[0].length);
    let currentCell = grid[row][col];
    if (!currentCell.isMine) {
      currentCell.isMine = true;
      mines.push({ row, col });
      updateCloseCells(grid, row, col);
      numMines--;
    }
  }
};

const updateCloseCells = (grid, row, col) => {
  updateCell(grid, row - 1, col - 1);
  updateCell(grid, row - 1, col);
  updateCell(grid, row - 1, col + 1);
  updateCell(grid, row, col - 1);
  // no updateCell(grid,row,col);
  updateCell(grid, row, col + 1);
  updateCell(grid, row + 1, col - 1);
  updateCell(grid, row + 1, col);
  updateCell(grid, row + 1, col + 1);
};

const updateCell = (grid, row, col) => {
  if (row >= 0 && col >= 0 && row < grid.length && col < grid[0].length) {
    grid[row][col].closeMines++;
  }
};

const openMines = (grid, mines) => {
  mines.forEach(mine => {
    grid[mine.row][mine.col].isOpen = true;
  });
};

const openCell = (game, row, col) => {
  const grid = game.grid;

  if (row >= 0 && col >= 0 && row < grid.length && col < grid[0].length) {
    if (grid[row][col].isOpen) {
      return;
    }
    grid[row][col].isOpen = true;
    game.openCells++;
    if (grid[row][col].closeMines === 0) {
      openCell(game, row - 1, col - 1);
      openCell(game, row - 1, col);
      openCell(game, row - 1, col + 1);
      openCell(game, row, col - 1);
      // no openCell(game,row,col);
      openCell(game, row, col + 1);
      openCell(game, row + 1, col - 1);
      openCell(game, row + 1, col);
      openCell(game, row + 1, col + 1);
    }
  }
};
