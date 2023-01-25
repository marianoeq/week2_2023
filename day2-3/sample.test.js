import { add } from './sample.js';
//Gerkin GWT => Manera de describir los test.
describe('Given add function', () => {
  describe('When we have two numbers', () => {
    //Arrange
    const a = 1;
    const b = 1;
    const expected = 2;
    //Act
    const r = add(a, b);
    test('then if a 1 and b 2, it should be 2', () => {
      //Assert
      expect(r).toBe(expected);
    });
  });
});
