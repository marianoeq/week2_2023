import { strictEquals } from './equals';
import { testCases } from './test.Cases';
describe('Given a strictEqual function', () => {
  describe('When we have two parameters', () => {
    testCases.forEach((item) => {
      test(`When we have two parameters ${item.label} then result should be ${item.result}`, () => {
        const r = strictEquals(item.a, item.b);
        expect(r).toBe(item.result);
      });
    });
  });
  describe.each(testCases)(
    `When we have two parameters`,
    ({ a, b, result, label }) => {
      test(`When arguments are ${label} then result should be ${result}`, () => {
        const r = strictEquals(a, b);
        expect(r).toBe(result);
      });
    }
  );
});
