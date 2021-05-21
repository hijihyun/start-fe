###자바스크립트의 모듈 시스템
모듈이란 특정 코드들을 묶은 하나의 모음
파일이 클수록 여러 개로 나눠 <script>로 불러올 수 있다

1. ESM: export, import 키워드 사용
2. CommonJS: Node.js에서 사용하며 module.exports와 require 키워드

###배포

-   배포 시 자바스크립트의 빌드는 이 static 파일들을 중복제거하고 합쳐 효율적으로 서빙(번들링)

-   Node.js 설치했기 때문에 터미널에서 테스트 cd 10하고 node main.js
    자동화나 백엔드 개발도 Node로

######Webpack

-   브라우저에서 테스트하면 에러나므로 Webpack 사용 빌드
-   이 폴더도 하나의 프로그램이므로 먼저 터미널에 npm init쳐서 packge.json 정의해주고
    npm install webpack webpack-cli --save-dev 설치하여 webpack환경 만든다

-   src폴더 만들어 관리

-   webpack 실행 전 config파일 만들고 npx webpack
    app.js보면 빌드되고 압축되어있다

-   빌드된 파일은 굳이 버전관리할 필요가 없기 때문에 .gitignore
    자바의 클래스파일처럼
    package.json도 devDependencies, dependencies(프로덕션용) 잘 나눠야
    npm install -p옵션 주면 devDependencies들은 설치 안한다

-   수정사항 있다면 다시 npx webpack해야하므로 자동화
    package.json의 "scripts"에 "build"부분 추가 "build": "echo '1'"하고
    npm run build하면 확인 가능
    따라서 "build": "webpack"해주면 된다.
    npx webpack --watch하면 실행 끝나지 않고 수정 일어나면 자동빌드

######webpack-dev-server

-   webpack-dev-server라는 플러그인 serve대신 이용
-   npm install --save-dev webpack-dev-server설치 후
    webpack.config에
    devServer: {
    contentBase: './dist',
    }, 추가
    package.json의 "script"에
    "start": "webpack-dev-server --open", 추가해서 npm start치면 브라우저 바로 띄우기
    자동 watching

######HtmlWebpackPlugin

-   dist에 index.html 옮겨 production환경이랑 비슷했으면 좋겠어
    npm install --save-dev html-webpack-plugin설치하고 webpack.config 수정

-   webpack-dev-server는 메모리로만 관리하기 때문에 빌드 전에는 dist 폴더에 실제로 보이지 않는다
    npm run build하면 그제서야 dist폴더에 app.js과 index.html 생긴다

-   serve dist하면 빌드된 환경 확인 가능

-   다른 사람이 git clone한 뒤 해당 폴더에서 npm install하면 추가했던것들 자동으로 다운로드되게 된다.
    빌드, 배포 등 README.md로 전달하면 되는 것
