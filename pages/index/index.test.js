import global from '../../global_test'
import './index'

const page = global.wxPageInstance;

describe('page index', () => {
  beforeAll(() => {
    console.log('before All');
    page.onLoad()
  })
  test('multi fn', () => {
    const value = page.multi.call(page, 10, 11)
    expect(value).toBe(110)
  })
})
