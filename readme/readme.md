### 安装
1、基本配置：[miniprogram-simulate](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/unit-test.html)、[jest](https://jestjs.io/zh-Hans/)
```
npm i --save-dev miniprogram-simulate
npm i --save-dev jest
```

2、配置package.json
```
  "scripts": {
    "test": "jest"
  },
```

3、bable配置：
```
npm i @mpflow/plugin-babel
npm i @mpflow/plugin-typescript
```

4、根目录创建babel.config.js文件 [详情](./babel.md)
```
module.exports = {
  presets: ['@mpflow/plugin-babel/preset', '@mpflow/plugin-typescript/preset']
}
```

5、jest.config.js配置 [详情](./jest.md)

_*按需配置_

6、global_test.js 配置 [详情](./global.md)

* 用于在测试中模拟小程序的环境和功能，根目录创建 ```global_test.js``` 文件
* 需要在 ```jest.config.js``` 配置 ```setupFilesAfterEnv```

———————————————————————————
### 测试

_*不配置 ```jest.config.js``` 的情况：_

1、运行所有的test文件：
```
npm test
```

2、运行指定的test文件：
```js
npm test base.test.js //根目录
npm test -- pages/index/index.test.js
```

3、运行指定的测试用例：
- test内的文件控制

  ```js
  test.only()
  describe.only()
  // 跳过
  test.skip() 
  describe.skip()
  ```

- npm控制：npm test -- --testNamePattern=用例名、简写：npm test -- --t=用例名

  ```js
  npm test -- --testNamePattern=name //运行了包含'name'的测试用例 
  ```

_*配置 ```jest.config.js``` 的情况：_
- 通过 ```jest.config.js``` 内的 ```testMatch``` 或 ```testRegex``` 来控制执行的test文件

4、jest的交互模式
  - `a`：运行所有测试
  - `f`：只运行失败的测试
  - `o`：只运行与更改的文件相关的测试
  - `p`：按文件名过滤测试
  - `t`：按测试名称过滤测试
  - `q`：退出监视模式
  - `Enter`：手动触发一次测试运行
```js
npm test -- --watchAll

//运行结果
 › Press a to run all tests.
 › Press f to run only failed tests.
 › Press o to only run tests related to changed files.
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press q to quit watch mode.
 › Press Enter to trigger a test run.
```

——————————————————————————————————
### 参考链接

官方文档：
>[miniprogram-simulate](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/unit-test.html)

>[jest官网](https://jestjs.io/zh-Hans/)

参考文档：
>[前端自动化测试](https://itxiaohao.github.io/passages/automated-testing-learn-introduction/#%E8%87%AA%E5%8A%A8%E5%8C%96%E6%B5%8B%E8%AF%95%E7%B1%BB%E5%9E%8B)

>[🚀React 测试 + Vue 测试 + 小程序测试](https://juejin.cn/post/6844904184702042126#heading-3)

>[内部团队单元测试探索、落地及后续思考](https://developers.weixin.qq.com/community/develop/article/doc/00000830ad0358a009c904aff51c13)

>[小程序单元测试](https://juejin.cn/post/6844903687580549134)

参考案例：
>[小程序微信开发工具新建代码片段成功后怎么直接进行单元测试](https://developers.weixin.qq.com/community/develop/article/doc/000a4cebef42b0b535cd6e31856013)