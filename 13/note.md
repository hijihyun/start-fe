### React

react library 사용한 todo앱
UI 만들기 위해 페이스북에서 만든 라이브러리

#### 설정

    <script src="https://unpkg.com/react@16.13.1/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16.13.1/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone@7.8.3/babel.js"></script>
    추가

    .eslintrc.js에서
    globals: {
    	React: true,
    	ReactDOM: true,
    },

#### JSX

HTML처럼 쓰는 문법

#### Babel

ES6 지원하지 않는 브라우저에서 ES5로 바꿔주어 하위호환성 향상
웹팩안에 넣어 빌드할때 하면 좋다

    <script src="react.js" type="text/babel"></script>

얘를 이용해서 jsx
const el = <div className="container">test</div>; 를
const el = React.createElement('div', { className: 'container' }, 'React'); 로 변환

#### create react app 프로젝트를 쉽게 만들 수 있는 tool

cd 13
npx create-react-app todo
cd todo
yarn.lock파일, node_modules 지우고 npm install
npm start 하면 기본 react 프로젝트 파일 구성완료
src/App.js가서 수정

리액트는 컴포넌트별로 스크립트 코드나 css코드를 관리하는 것을 권장
