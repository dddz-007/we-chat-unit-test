### `jest.config.js` 常用配置

- `testMatch`: 指定 Jest 测试文件的匹配规则，例如 `**/__tests__/**/*.test.js` 表示匹配所有 `__tests__` 目录下的 `.test.js` 文件。
  ```js
    testMatch: [
      '**/__tests__/**/*.test.js'
    ],
  ```

- `testRegex`: 指定 Jest 测试文件的匹配规则，与 `testMatch` 类似。例如，以下配置表示匹配所有以 `.test.js` 或 `.spec.js` 结尾的测试文件：
  ```js
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$'
  ```

- `setupFilesAfterEnv`: 指定需要在运行测试之前执行的 setup 文件，例如 `./setupTests.js` 表示在运行测试之前执行 `setupTests.js` 文件。
  ```js
    setupFilesAfterEnv: ['./setupTests.js'],
  ```

- `testPathIgnorePatterns`: 指定 Jest 需要忽略的文件或目录，例如 `/node_modules/` 表示忽略 `node_modules` 目录下的文件。
  ```js
    testPathIgnorePatterns: ['/node_modules/'],
  ```

- `testEnvironment`: 指定测试代码的运行环境，例如 `jsdom` 表示在虚拟的浏览器环境中运行测试代码。
  ```js
  testEnvironment: 'jsdom',
  ```

- `coverageDirectory`: 指定测试覆盖率的统计信息输出目录，例如 `coverage` 表示输出到 `coverage` 目录下。
  ```js
    coverageDirectory: 'coverage',
  ```

- `collectCoverageFrom`: 指定需要进行测试覆盖率统计的文件或目录，例如 `src/**/*.js` 表示统计 `src` 目录下的所有 `.js` 文件的测试覆盖率。
  ```js
  collectCoverageFrom: ['src/**/*.js'],
  ```

- `moduleNameMapper`: 指定测试代码中模块导入的路径别名，例如 `'^@/(.*)$': '<rootDir>/src/$1'` 表示将 `@` 替换为 `src` 目录。
  ```js
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1'
    },
  ```

- `globals`: 指定 Jest 在运行测试之前需要执行的全局配置，例如 `NODE_ENV: 'test'` 表示在运行测试时将 `process.env.NODE_ENV` 设置为 `test`。
  ```js
    globals: {
      NODE_ENV: 'test'
    }
  ```

- `transform`: 指定 Jest 对代码进行转换的方式，默认使用 `babel-jest` 来进行转换。例如，可以使用以下配置将 TypeScript 转换为 JavaScript：
  ```js
    transform: {
      '^.+\\.ts$': 'ts-jest'
    },
  ```

- `moduleFileExtensions`: 指定 Jest 支持的模块文件扩展名，默认支持 `.js` 和 `.jsx`。例如，可以使用以下配置添加对 TypeScript 的支持：
  ```js
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  ```