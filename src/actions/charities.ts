import { createAction } from 'typesafe-actions';
import { CharitiesResponse } from '../api/charities';

// action types
const GET_CHARITIES = '@@CHARITIES/GET/SUCCESS';

export const getCharities = createAction(GET_CHARITIES, (action) => (payload: CharitiesResponse) =>
  action(payload)
);
