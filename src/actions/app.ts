import { createAction } from 'typesafe-actions';
import { SnackbarStatus } from '../reducers/app';

// action types
const SHOW_SNACKBAR = '@@APP/SNACKBAR/SHOW';
const CLOSE_SNACKBAR = '@@APP/SNACKBAR/CLOSE';

export const showSnackbar = createAction(
  SHOW_SNACKBAR,
  (action) => (payload: { message: string; status: SnackbarStatus }) => action(payload)
);

export const closeSnackbar = createAction(CLOSE_SNACKBAR);
