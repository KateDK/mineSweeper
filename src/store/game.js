/**
 * ACTION TYPES
 */

const INITIATE_GAME = 'INITIATE_GAME';

/**
 * INITIAL STATE
 */
const initialState = 'Hello from the Redux Store';

/**
 * ACTION CREATORS
 */
export const getState = () => ({ type: INITIATE_GAME, toAdd: '!' });

/**
 * THUNK CREATORS
 */

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case INITIATE_GAME:
      return state + action.toAdd;
    default:
      return state;
  }
}
