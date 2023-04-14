import global from '../../../global_test'
import './index'

// give
const components = global.wxComponentInstance

test('unit-txt add Fn', () => {
  components.other = jest.fn()
  //when
  components.methods.add.call(components, 1, 2) //调用并执行
  //then
  expect(components.other).toBeCalled();
  expect(components.data.result).toBe(3)
  
  console.log('zzzzzzzzzz', components);
})