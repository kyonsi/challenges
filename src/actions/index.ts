import { ActionType } from 'typesafe-actions';
import * as app from './app';
import * as charities from './charities';
import * as payments from './payments';

export const actions = {
  ...app,
  ...charities,
  ...payments
};

export type RootActions = ActionType<typeof actions>;
