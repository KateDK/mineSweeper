/**
 * ACTION TYPES
 */

const INITIATE_PROJECT = 'INITIATE_PROJECT';

/**
 * INITIAL STATE
 */
const initialState = 'Hello from the Redux Store';

/**
 * ACTION CREATORS
 */
export const getState = () => ({ type: INITIATE_PROJECT, toAdd: '!' });

/**
 * THUNK CREATORS
 */

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case INITIATE_PROJECT:
      return state + action.toAdd;
    default:
      return state;
  }
}
