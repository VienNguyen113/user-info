import { fromJS } from 'immutable';
import userReducer from '../reducer';

describe('userReducer', () => {
  it('returns the initial state', () => {
    expect(userReducer(undefined, {})).toEqual(
      fromJS({
        user: {
          loading: false,
          success: false,
          data: {},
          error: null,
        },
        users: {
          loading: false,
          success: false,
          data: [],
          error: null,
        },
      }),
    );
  });
});
