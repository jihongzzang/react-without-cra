# react-without-cra

CRA 없이 리액트 환경설정하기

```ts
<script>
    //   const App = () => <h1>Hello World</h1>;

    //   const root = ReactDOM.createRoot(document.getElementById('root'));

    //   root.render(
    //       <React.StrictMode>
    //         <App />
    //         </React.StrictMode>
    //     );

    const App = () => React.createElement('h1', null, 'HELLO REACT WORLD');

    ReactDOM.render(React.createElement(App), document.getElementById('root'));
</script>
```

- jsx 활용을 위해서는 트랜스파일러가 필요함

- 트랜스파일러 = 문법변환 및 언어 변환 도구

```zsh
$npm install --save-dev @babel/cli @babel/core @babel/preset-react

@babel/cli, @babel/core

=> script 명령어를 통해 Babel을 실행하기 위한 패키지

@babel/preset-react

=> react 문법을 js로 변환하기 위한 도구
```

```ts
//- 스크립트 변환을 알려주어야함 => type='"text/babel'
//- You are using the in-browser Babel transformer. Be sure to precompile your scripts for production
//- 이렇게 하더라도 위와같은 오류가 난다. 여기서 필요한게 webpack

<script type="text/babel">
const App = () => <h1>Hello World</h1>;
ReactDOM.render(React.createElement(App), document.getElementById('root'));
</script>
```

```ts
.babelrc 파일 생성

=> babel은 실행될 때 .babelrc 파일을 찾아 설정 정보를 참조

=> rc는 unix 운영체제에서 설정 파일에 붙는 접미사

package.json 수정

// 바벨을 실행 => 원본 소스폴더를 트랜스파일 결과물 저장하는 폴더로 빌드해줘

"scripts": {
    "bulid": "babel src --out-dir dist"
},


```

## 계산기를 한번 만들어보자

```js
// src/utils를 만들어주고 더하기, 뺄셈, 곱하기, 나누기 함수를 나누어보자.

// app.js에서 import 해주고 밖에서 함수들을 사용하자.

// build 하면 아마 es 모듈이 아니라, 임포트 할 수 없다고 나옴

// script tag type 'module' 이라고 정의 해주자.

// 근데 문제는 스크립트를 너무 많이 받아온다.

// HTTP 요청에는 서버와의 요청, 응답 시간 뿐만 아니라 TCP, DNS 조회 등등 부가적인 시간도 소요

// 브라우저는 한 도메인 당 한번에 요청할 수 있는 Connection을 최대 6개로 제한함.

// 이 과정에서 하나로 합치는 번들링필요.
```

```zsh
$npm install --save-dev webpack webpack-cli

$npm install --save-dev babel-loader

$mkdir webpack.config.js
```

```text
=> (설정 세팅)

in package.json

"build": "babel src --out-dir dist" => "build": "webpack" 수정
```

```text
webpack.config.js

production : 코드 최적화 과정(트리 쉐이킹, 코드 스플리팅, 코드 난독화)이 자동으로 이루어짐.

development : 코드 최적화 과정이 자동으로 이루어지지 않음.
```

```zsh
$npm install --save-dev html-webpack-plugin

// 번들링과정에서 도움을 줌.
```

```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.export = {
  //...rest,

  // Plugin: 빌드 프로세스의 특정 시점에 후킹되어 추가 기능을 수행하는 확장 모듈.
  // [Webpackplugins 사이트](https://webpack.js.org/plugins/)

  plugins: [
    new HtmlWebpackPlugin({
      template: '/index.html',
      filename: 'index.html',
    }),
  ],
};

//추가
```
