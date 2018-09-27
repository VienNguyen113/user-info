/*
 *
 * User actions
 *
 */

import { GET_ALL_REQUESTED, SUBMIT_REQUESTED } from './constants';

export function getAll() {
  return {
    type: GET_ALL_REQUESTED,
  };
}

export function submit(user) {
  return {
    type: SUBMIT_REQUESTED,
    user,
  };
}
