import { combineReducers } from 'redux';
import { StateType } from 'typesafe-actions';
import { charitiesReducer } from './charities';
import { paymentsReducer } from './payments';
import { appReducer } from './app';

export const reducers = combineReducers({
  charities: charitiesReducer,
  payments: paymentsReducer,
  app: appReducer
});

export type RootState = StateType<typeof reducers>;
