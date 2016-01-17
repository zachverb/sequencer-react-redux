const DIMENSIONS_LENGTH = 8;

const initialState = (function generateInitialState() {
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
})();

export default function player(state = initialState, action) {
  switch(action.type) {
  default:
    return state; 
  }
}
