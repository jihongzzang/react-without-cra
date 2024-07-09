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
