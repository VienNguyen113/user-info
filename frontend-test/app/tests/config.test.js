import { API_URL } from '../config';

test('config', () => {
  expect(API_URL).toBe('http://localhost:8000');
});
