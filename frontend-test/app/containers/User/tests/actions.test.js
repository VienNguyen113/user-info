import { GET_ALL_REQUESTED, SUBMIT_REQUESTED } from '../constants';
import { getAll, submit } from '../actions';

describe('User actions', () => {
  describe('getAll action', () => {
    it('has a type of GET_ALL_REQUESTED', () => {
      const expected = {
        type: GET_ALL_REQUESTED,
      };
      expect(getAll()).toEqual(expected);
    });
  });

  describe('submit action', () => {
    it('has a type of SUBMIT_REQUESTED', () => {
      const expected = {
        type: SUBMIT_REQUESTED,
      };
      expect(submit()).toEqual(expected);
    });
  });
});
