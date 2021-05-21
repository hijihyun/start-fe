###Prettier: 인덴트 등 코드 정리

######설치

-   cmd에 npm install --global prettier 치면 설치된다 --global 모든 디렉토리 사용가능
    vscode 터미널에서 prettier 명령문 쳐도 되지만 마켓플레이스에서 설치하고
    저장할 때마다 적용하려면 설정>prettier>"editor.formatOnSave" : true

######테스트
let prettierTest = 'hi';

######설정파일

-   프리티어 옵션은 해당 프로젝트 루트에 .prettierrc라는 설정 파일 만들어 관리 & 공유

###ESLint: 코드 problems fix

######설치

-   내 프로젝트 폴더에서 설치 npm install eslint --save-dev 개발용
    node_modules는 .gitignore파일에서 버전관리 제외

-   프로젝트 정보 담고있는 package.json file 만들기 위해 npm init하고 다 엔터
    "dependencies" 배포용
    "devDependencies" 개발용, eslint 위치

-   npx eslint --init치고 엔터(디폴트), 엔터, None of these, 다 엔터
    생성된 설정파일 .eslintrc.js

-   prettier처럼 vscode에 설치
    .eslintrc.js "rules"에서 옵션 가능 error, warn

######설정파일

-   airbnb 룰 추가
    npx install-peerdeps --dev eslint-config-airbnb-base
    .eslintrc.js의 extends부분 'eslint:recommended'를 ['eslint:recommended', 'airbnb-base']로

-   현재 열린 파일만 체크한다.
    가이드를 따르고 싶지 않다면 Disable
    alert보다는 디자인된 UI 이용 권장

######실행 방법

-   명령어는 npx eslint --help
    npx eslint 07/app.js하면 에러 확인 가능
    29:5 error 'prettierTest' is assigned a value but never used no-unused-vars

###prettier와 ESLint 충돌 방지
npm install eslint-config-prettier --save-dev 설치하면 package.json에 devDependencies에 추가된다
.eslintrc.js의 extends부분에 'prettier' 추가
