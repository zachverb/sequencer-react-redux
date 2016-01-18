import {TOGGLE_STEP} from 'constants/ActionTypes';
import {fromJS} from 'immutable';

const DIMENSIONS_LENGTH = 8;

const initialState = fromJS((function generateInitialState() {
  return {
    grid: Array.from(new Array(DIMENSIONS_LENGTH), (val, row) => {
      return Array.from(new Array(DIMENSIONS_LENGTH), (val, column) => {
        return {
          active: false,
          row,
          column
        };
      })
    })
  }
})());

export default function player(state = initialState, action) {
  switch(action.type) {
  case TOGGLE_STEP:
    return state.updateIn(['grid', action.payload.row, action.payload.column, 'active'], active => !active);
  default:
    return state; 
  }
}
