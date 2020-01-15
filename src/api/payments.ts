import { client, useRequest } from '.';
import { Currency } from './charities';

export type PaymentsItem = {
  charitiesId: number;
  amount: number;
  currency: Currency;
  id: number;
};

export type PaymentsPostRequest = {
  charitiesId: number;
  amount: number;
  currency: Currency;
};

export type PaymentsResponse = PaymentsItem[];

export const paymentsPostRequest = (data: PaymentsPostRequest) =>
  client<unknown>({
    method: 'post',
    url: 'http://localhost:3001/payments',
    data
  });

export const usePaymentsGetRequest = () =>
  useRequest<PaymentsResponse, Error>({
    url: 'http://localhost:3001/payments'
  });
