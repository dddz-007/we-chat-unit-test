// pages/component/unit-txt/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    txt: { type: String, value: 'index.properties' }
  },

  /**
   * 组件的初始数据
   */
  data: {
    result: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    other: function () {
      console.log('调用了 other');
    },
    add: function (a, b) {
      this.other()
      this.setData({ result: a + b })
    }
  }
})
