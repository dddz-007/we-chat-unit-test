> 用于在测试中模拟小程序的环境和功能。其中包括：
- noop：一个空函数
- isFn：一个判断传入参数是否为函数的函数
- wx：一个模拟的小程序全局对象，其中包括showLoading和hideLoading函数
- Component：一个模拟的小程序组件注册函数，可以用来注册组件，并且可以设置组件的属性、数据和生命周期函数等
- Page：一个模拟的小程序页面注册函数，可以用来注册页面，并且可以设置页面的数据和生命周期函数等
- setData：一个模拟的小程序页面中的setData函数，用于修改页面的数据