const add = (a, b) => {
  return a + b;
}

const setObj = (key, value) => {
  const data = { one: 1 };
  data[key] = value
  return data
}

const isNumber = (n) => {
  return (typeof (n) == 'number')
}

const throwFn = (msg) => {
  throw new Error(msg)
}

const promiseFn = (bool) => {
  return new Promise((resolve, reject) => {
    if (bool) {
      resolve('promise ok')
    } else {
      reject('promise fail')
    }
  })
}

const asyncFn = async () => {
  const res = new Promise((resolve) => {
    setTimeout(() => {
      console.log('time out');
      resolve('async ok');
    }, 1000);
  });
  return res
}

const mockFn = async (num) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num * 2);
    }, 1000);
  });
}

module.exports = {
  add,
  setObj,
  isNumber,
  throwFn,
  promiseFn,
  asyncFn,
  mockFn
}