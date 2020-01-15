import { createAction } from 'typesafe-actions';
import { PaymentsResponse } from '../api/payments';

// action types
const GET_PAYMENTS = '@@PAYMENTS/GET/SUCCESS';
const POST_PAYMENTS = '@@PAYMENTS/POST/SUCCESS';
const POST_PAYMENTS_FAILED = '@@PAYMENTS/POST/FAILED';

export const getPayments = createAction(GET_PAYMENTS, (action) => (payload: PaymentsResponse) =>
  action(payload)
);

export const postPayments = createAction(POST_PAYMENTS, (action) => (payload: string) =>
  action(payload)
);
export const postPaymentsFailed = createAction(
  POST_PAYMENTS_FAILED,
  (action) => (payload: string) => action(payload)
);
