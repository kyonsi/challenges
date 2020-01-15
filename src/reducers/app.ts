import { createReducer } from 'typesafe-actions';
import * as actions from '../actions/app';

import { RootActions } from '../actions';

export type SnackbarStatus = 'success' | 'error';

export type AppState = {
  ui: {
    snackbar?: {
      message: string;
      status: SnackbarStatus;
      show: boolean;
    };
  };
};

const initialState: AppState = {
  ui: {}
};

export const appReducer = createReducer<AppState, RootActions>(initialState)
  .handleAction(actions.closeSnackbar, (state) => ({
    ...state,
    ui: {}
  }))
  .handleAction(actions.showSnackbar, (state, action) => ({
    ...state,
    ui: {
      snackbar: {
        ...action.payload,
        show: true
      }
    }
  }));
