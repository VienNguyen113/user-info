import { fromJS } from 'immutable';
import { selectUserDomain } from '../selectors';

describe('selectUserDomain', () => {
  it('Expect to have unit tests specified', () => {
    const userState = fromJS({
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
    });
    const mockedState = fromJS({
      user: {
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
      },
    });
    expect(selectUserDomain(mockedState)).toEqual(userState);
  });
});
