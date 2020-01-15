import { paymentsReducer, initialState } from './payments';
import * as actions from '../actions/payments';

describe('payments reducer test', () => {
  it('get payments', () => {
    const MOCK_RESPONSE = [
      {
        charitiesId: 2,
        amount: 10,
        currency: 'THB' as const,
        id: 1
      },
      {
        charitiesId: 1,
        amount: 20,
        currency: 'THB' as const,
        id: 2
      },
      {
        charitiesId: 3,
        amount: 50,
        currency: 'THB' as const,
        id: 3
      }
    ];
    expect(paymentsReducer(initialState, actions.getPayments(MOCK_RESPONSE))).toEqual({
      data: {
        totalAmount: 80,
        list: [
          {
            charitiesId: 2,
            amount: 10,
            currency: 'THB',
            id: 1
          },
          {
            charitiesId: 1,
            amount: 20,
            currency: 'THB',
            id: 2
          },
          {
            charitiesId: 3,
            amount: 50,
            currency: 'THB',
            id: 3
          }
        ]
      }
    });

    expect(paymentsReducer(initialState, actions.getPayments([]))).toEqual({
      data: {
        totalAmount: 0,
        list: []
      }
    });
  });
});
