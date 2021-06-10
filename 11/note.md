### ToDo App

배열 CRUD
javascript todo mvc라고 구글링하면 각종 라이브러리 예제
우리는 기본 vanilla js로 제작할 예정

---

#### 설정

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

#### 기능

엔터치면 form이 submit되는중
각종 id값 설정하고 js에 DOM 가져오고
submit event 확인 및 render 등 함수화/모듈화
.eslintrc.js에 'import/prefer-default-export': 'off', 추가

다양한 모듈화
object 합치는 함수 assign

result 전체에 이벤트 잡고 클래스 네임별로 처리

#### 배포

npm run build 하면 dist 폴더 생성
serve dist
.gitignore에 dist 추가

#### 저장

1. 브라우저 web local storage 쿠키보다 용량 크다
   localStorage.setItm('myCat','Tom');하고
   window.localStorage, localStorage.getItem('myCat')하면 확인 가능
   개발자도구 Application탭에서도 local storage 확인
   render함수 안에 saveData
   배열 말고 스트링 형태로
   JSON.parse하면 배열 형태로 가져온다

2. 원격 저장을 위한 간단한 backend작업 json server
   npm install json-server
   로컬 실행 npx json-server --watch db.json
   fetch이용 CRUD

#### 깃허브 페이지로 production환경 서비스 배포

copy하고 다시 만드는경우 rm -rf node_modules하고 다시 npm i 주면 된다
docs폴더에 dist 애들 옮기고 깃허브 페이지에서 docs옵션 선택
자동화 package.json 수정하고 깃에 push
