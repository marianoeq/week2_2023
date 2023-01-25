import { add } from './sample.js';
describe('testing add', () => {
  test('if a 1 and b 2, it should be 2', () => {
    const r = add(1, 1);
    expect(r).toBe(2);
  });
});
