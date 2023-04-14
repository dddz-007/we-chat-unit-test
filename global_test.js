export const noop = () => {};
export const isFn = fn => typeof fn === 'function';
let wId = 0;

global.wx = {
  showLoading: jest.fn(),
  hideLoading: jest.fn(),
};


global.Component = ({ data, properties, ...rest }) => {
  const component = {
    properties,
    data,
    setData,
    created: noop,
    attached: noop,
    ready: noop,
    moved: noop,
    detached: noop,
    error: noop,
    methods: {},
    ...rest,
  };
  global.wxComponentInstance = component;
  return component;
}

global.Page = ({ data, ...rest }) => {
  const page = {
    data,
    setData,
    onLoad: noop,
    onReady: noop,
    onUnLoad: noop,
    __wxWebviewId__: wId++,
    ...rest,
  };
  global.wxPageInstance = page;
  return page;
};

// 然后是对页面中setData函数的Mock
const setData = jest.fn(function fn(newData, cb) {
  this.data = {
    ...this.data,
    ...newData,
  };
  if (cb) cb();
});


module.exports = global;