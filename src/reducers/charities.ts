import { createReducer } from 'typesafe-actions';
import { CharitiesResponse } from '../api/charities';
import * as actions from '../actions/charities';

import { RootActions } from '../actions';

export type CharitiesState = {
  data: CharitiesResponse;
};

export const initialState: CharitiesState = {
  data: []
};

export const charitiesReducer = createReducer<CharitiesState, RootActions>(
  initialState
).handleAction(actions.getCharities, (state, action) => ({
  ...state,
  data: action.payload
}));
