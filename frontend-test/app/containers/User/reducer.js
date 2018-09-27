/*
 *
 * User reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_ALL_REQUESTED,
  GET_ALL_SUCCEEDED,
  GET_ALL_FAILED,
} from './constants';

export const initialState = fromJS({
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

function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_REQUESTED:
      return state.mergeDeep({
        users: {
          loading: true,
          success: false,
          error: null,
        },
      });
    case GET_ALL_SUCCEEDED:
      return state.mergeDeep({
        users: {
          loading: false,
          success: true,
          data: action.data,
          error: null,
        },
      });
    case GET_ALL_FAILED:
      return state.mergeDeep({
        users: {
          loading: true,
          success: false,
          error: action.error,
        },
      });
    default:
      return state;
  }
}

export default userReducer;
