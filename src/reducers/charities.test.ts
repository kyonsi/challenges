import { charitiesReducer, initialState } from './charities';
import * as actions from '../actions/charities';

describe('charities reducer test', () => {
  it('get charities', () => {
    expect(
      charitiesReducer(
        initialState,
        actions.getCharities([
          {
            currency: 'THB',
            id: 1,
            image: 'hogehgoe.jpg',
            name: 'tarou'
          }
        ])
      )
    ).toEqual({
      data: [
        {
          currency: 'THB',
          id: 1,
          image: 'hogehgoe.jpg',
          name: 'tarou'
        }
      ]
    });

    expect(charitiesReducer(initialState, actions.getCharities([]))).toEqual({
      data: []
    });
  });
});
