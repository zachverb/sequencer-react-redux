import {combineReducers} from 'redux';
import {routeReducer as routing} from 'redux-simple-router';
import {reducer as form} from 'redux-form';
import sequencer from './sequencer';

const rootReducer = combineReducers({
  form,
  routing,
  sequencer
});

export default rootReducer;
