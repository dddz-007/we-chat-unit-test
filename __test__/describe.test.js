const { it } = require("_jest-circus@29.5.0@jest-circus");

describe('describe number', () => {
  // it 和 test 函数一样，别名
  it('describe adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
  });

  test('describe multiplies 2 * 3 to equal 6', () => {
    expect(2 * 3).toBe(6);
  });
});