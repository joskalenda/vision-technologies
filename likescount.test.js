import { likesFunction } from './src/card_like.js';

describe('test the number of the likes', () => {
  test('this shold return the number of likes', () => {
    let testLike = 10;
    testLike = likesFunction(testLike);
    expect(testLike).toBe(11);
  });
});
