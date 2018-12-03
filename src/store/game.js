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

/**
 * INITIAL STATE
 */
const initialState = {
  grid: [],
  gameWon: false,
  gameOver: false,
  openCells: 0,
  dificulty: easy,
};

/**
 * ACTION CREATORS
 */
export const getState = () => ({ type: INITIATE_GAME, toAdd: '!' });
export const initiateGame = dificulty => ({ type: INITIATE_GAME, dificulty });

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case INITIATE_GAME: {
      let game = { ...initialState, dificulty: action.dificulty };
      const rows = game.dificulty.rows;
      const cols = game.dificulty.cols;

      for (let row = 0; row < rows; row++) {
        let currentRow = [];
        for (let col = 0; col < cols; col++) {
          currentRow.push({ ...cell });
        }
        game.grid.push(currentRow);
      }
      return game;
    }
    default:
      return state;
  }
}
