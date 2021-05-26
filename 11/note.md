### ToDo App

배열 CRUD
javascript todo mvc라고 구글링하면 각종 라이브러리 예제
우리는 기본 vanilla js로 제작할 예정

###### 설정

파일들 src에 넣고 터미널에서 cd 11, npm init -y해서 package.json 생성, package.json 편집

.prettierrc파일과 .eslintrc.js파일 복붙. package.json의 devDependencies도 복붙

npm install

webpack.config.js도 devDependencies랑 복붙하고 main.js→index.js로 수정 후 다시 npm install

package.json에
"start": "webpack-dev-server --open",
"build": "webpack",도 추가

앞으로도 이렇게 간편하게 설정 가능

npm start쳐서 브라우저에 띄우기
todo.css가 dist에 없으므로 index.js에서 import
지금 webpack은 js만 불러오게 되어 있으므로 css나 기타 파일 불러오는 모듈 설치 npm install --save-dev css-loader style-loader 하고 webpack.config.js에 추가하고 다시 npm start
webpack이 js파일에서 css파일을 읽어 head태그 안에 꽂아준다

###### 기능

엔터치면 form이 submit되는중
각종 id값 설정하고 js에 DOM 가져오고
submit event 확인 및 render 등 함수화/모듈화
.eslintrc.js에 'import/prefer-default-export': 'off', 추가
