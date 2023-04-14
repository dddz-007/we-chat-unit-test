### babel.config.js

>babel.config.js文件是一个Babel配置文件，用于配置Babel编译器的行为，以便将ES6+代码转换为浏览器可识别的ES5代码。

babel.config.js文件可以配置以下内容：
```
1. presets：预设，用于指定Babel要使用的预定义插件集合。预设通常是一组插件的集合，可以简化配置。例如，@babel/preset-env预设包含了所有的ES6+转换插件。

2. plugins：插件，用于指定要使用的单个插件，以便根据需要进行定制。插件可以用于添加、修改或删除特定的转换。

3. env：环境，可以根据不同的环境配置不同的Babel选项。例如，可以为开发环境和生产环境配置不同的插件和预设。

4. ignore：忽略某些文件或目录，以避免Babel转换不需要转换的代码。

5. include/exclude：指定要包含或排除的文件或目录。通过这些选项，可以控制Babel的转换范围。

6. sourceMaps：源映射，用于生成源代码和转换后代码之间的映射，以便在调试代码时能够更轻松地追踪问题。
```
使用：
presets: ['@mpflow/plugin-babel/preset', '@mpflow/plugin-typescript/preset']
```
1. @mpflow/plugin-babel/preset：这个预设包含了一些针对小程序开发的Babel插件，可以将ES6+语法转换为小程序支持的ES5语法。

2. @mpflow/plugin-typescript/preset：这个预设包含了一些针对TypeScript语法的Babel插件，可以将TypeScript语法转换为JavaScript语法。
```