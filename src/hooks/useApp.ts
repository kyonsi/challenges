import { useDispatch } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { getPayments } from '../actions/payments';
import { useTypedSelector } from './useTypedSelector';
import { useCharitiesGetRequest } from '../api/charities';
import { getCharities } from '../actions/charities';
import { usePaymentsGetRequest, paymentsPostRequest, PaymentsPostRequest } from '../api/payments';
import { showSnackbar } from '../actions/app';

export const useApp = () => {
  const charities = useTypedSelector((state) => state.charities.data);
  const totalAmount = useTypedSelector((state) => state.payments.data.totalAmount);
  const chartieisResponse = useCharitiesGetRequest();
  const paymentsResponse = usePaymentsGetRequest();
  const dispatch = useDispatch();

  useEffect(() => {
    if (chartieisResponse.data) dispatch(getCharities(chartieisResponse.data));
  }, [chartieisResponse.data, dispatch]);

  useEffect(() => {
    if (paymentsResponse.data) dispatch(getPayments(paymentsResponse.data));
  }, [paymentsResponse, dispatch]);

  const submitPayment = useCallback(
    (payload?: PaymentsPostRequest) => {
      if (!payload || (payload && !payload.amount))
        return dispatch(
          showSnackbar({
            message: 'Please select a donation amount',
            status: 'error'
          })
        );

      return paymentsPostRequest(payload)
        .then(() => {
          dispatch(
            showSnackbar({
              message: 'Thankyou donate!!',
              status: 'success'
            })
          );
          paymentsResponse.revalidate();
        })
        .catch(() => {
          dispatch(
            showSnackbar({
              message: 'Failed request',
              status: 'error'
            })
          );
        });
    },
    [dispatch, paymentsResponse]
  );
  return {
    charities,
    totalAmount,
    submitPayment
  };
};
