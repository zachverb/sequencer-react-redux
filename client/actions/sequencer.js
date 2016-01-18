import {TOGGLE_STEP} from 'constants/ActionTypes';

export function toggleStep(row, column) {
  return {
    type: TOGGLE_STEP,
    payload: {
      row,
      column
    }
  };
}
