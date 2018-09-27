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
  SUBMIT_REQUESTED,
  SUBMIT_FAILED,
  SUBMIT_SUCCEEDED,
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
    case SUBMIT_REQUESTED:
      return state.deleteIn(['user', 'data']).mergeDeep({
        user: {
          loading: true,
          success: false,
          error: null,
          data: {},
        },
      });
    case SUBMIT_SUCCEEDED:
      return state.mergeDeep({
        user: {
          loading: false,
          success: true,
          data: action.data,
        },
      });
    case SUBMIT_FAILED:
      return state.mergeDeep({
        user: {
          loading: false,
          success: false,
          data: {},
          error: null,
        },
      });
    case GET_ALL_REQUESTED:
      return state.deleteIn(['users', 'data']).mergeDeep({
        users: {
          loading: true,
          success: false,
          error: null,
          data: [],
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
