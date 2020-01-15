import { createReducer } from 'typesafe-actions';
import { PaymentsResponse } from '../api/payments';
import * as actions from '../actions/payments';

import { RootActions } from '../actions';
import { summaryDonations } from '../helper';

export type PaymentsState = {
  data: {
    totalAmount: number;
    list: PaymentsResponse;
  };
};

export const initialState: PaymentsState = {
  data: {
    totalAmount: 0,
    list: []
  }
};

export const paymentsReducer = createReducer<PaymentsState, RootActions>(initialState).handleAction(
  actions.getPayments,
  (state, action) => ({
    ...state,
    data: {
      ...state.data,
      totalAmount: summaryDonations(action.payload.map((item) => (item.amount ? item.amount : 0))),
      list: action.payload
    }
  })
);
