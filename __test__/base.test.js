const utils = require('../util/util.js');

/** @Number */
test('add 1 + 2 = 3', () => {
  expect(utils.add(1, 2)).toBe(3);
});

test('add 1 + 2 != 4', () => {
  expect(utils.add(1, 2)).not.toBe(4);
});

test('对象赋值', () => {
  expect(utils.setObj('two', 2)).toEqual({ one: 1, two: 2 });
});

test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3); // >3
  expect(value).toBeGreaterThanOrEqual(3.5); // >=3.5
  expect(value).toBeLessThan(5); // <5
  expect(value).toBeLessThanOrEqual(4.5); // <=4.5

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

/**@toBe 与 @toBeCloseTo 区别 */
test('两个浮点数字相加', () => {
  const value = 0.1 + 0.2;
  //expect(value).toBe(0.3);           这句会报错，因为浮点数有舍入误差
  expect(value).toBeCloseTo(0.3); // 这句可以运行
});

/**@toBe 与 @toEqual 区别 */
test('object reference equality check', () => {
  const obj1 = { name: 'John' };
  const obj2 = { name: 'John' };
  const obj3 = obj1;

  expect(obj1).not.toBe(obj2); // 比较的是对象或数组的引用
  expect(obj3).toBe(obj1); // 比较的是对象或数组的引用
});

test('object value equality check', () => {
  const obj1 = { name: 'John' };
  const obj2 = { name: 'John' };
  expect(obj1).toEqual(obj2); // 比较的是对象或数组的值
});

/** @null */
test('test null', () => {
  const n = null;
  expect(n).toBeNull(); //null
});

/** @undefined */
test('test undefined', () => {
  const u = undefined;
  expect(u).toBeUndefined(); //undefined
  // toBeDefined 与 toBeUndefined 相反
  expect(u).not.toBeDefined();
})

/** @true @false */
test('test if', () => {
  expect(utils.isNumber(3)).toBeTruthy() //true
  expect(utils.isNumber('abc')).toBeFalsy() //false
})

/** @String */
test('正则匹配 String', () => {
  const str = 'Hello, World!';
  expect(str).toMatch(/World/);
});

test('包含 String', () => {
  const str = 'Hello, World!';
  expect(str).toMatch('lo, W');
});

/** @Array @Object */
test('数组中包含milk', () => {
  const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
  ];
  expect(shoppingList).toContain('milk');
  expect(new Set(shoppingList)).toContain('milk');
});

/** @toThrow 函数抛出内容 */
test('throw msg', () => {
  expect(() => utils.throwFn('message no document')).toThrow('no')
})

/** @Promise @async*/
test('promise', () => {
  return utils.promiseFn(true).then(data => {
    expect(data).toBe('promise ok');
  });
});

test('async', async () => {
  const data = await utils.promiseFn(true)
  expect(data).toBe('promise ok')

  const data2 = await utils.asyncFn()
  expect(data2).toBe('async ok')
});

test('the fetch fails with an error', () => {
  return expect(utils.promiseFn(false)).rejects.toMatch('fail');
});