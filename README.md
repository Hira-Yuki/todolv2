
View Counter

![:name](https://count.getloli.com/get/@:todov2?theme=gelbooru)

# 기존의 Todo-List App을 개량한 버전입니다.

`react-router-dom`, `styled-components`, `redux`를 사용해서 My Todo List 를 다시 만듭니다.

## 구현할 기능들 : Features
- Create Todo : 새로운 할일을 생성합니다.
- Read Todos, Todo : 저장되어 있는 할일 목록과 할일을 가져옵니다.
- Update Todo : 할일의 상태를 변경합니다.
- Delete Todo : 할일을 제거합니다.

## 요구 사항 : Requirement

### 공통
- **todos 데이터는 리덕스를 사용해서 전역으로 상태를 관리합니다.**
- todos 모듈은 **`Ducks 패턴`**으로 구현합니다.

### 메인 페이지
- 디자인과 화면 구성은 자유
- Todo의 상태에 “완료” 그룹과 “진행중" 그룹을 나뉘어서 보이도록 구현
- Todo를 추가하면 제목 input과 내용 input은 다시 빈 값이 되도록 구현
- **input에 값이 있는 상태**에서 상세페이지로 이동하는 경우, input의 value가 초기화 되도록 구현
- Todo의 완료상태가 `true`이면, 상태 버튼의 라벨을 “취소”,  `false` 이면 라벨을 “완료” 로 보이도록 구현
- 전체 화면의 최대 넓이는 `1200px`, 최소 넓이는 `800px`로 제한하고, _컨텐츠를 화면의 가운데로 배치_
- `상세보기` 클릭하면 _Todo의 상세 페이지로 이동_ 합니다. 상세 페이지에서 보여야 하는 내용은 아래에서 별도 기술

### 상세 페이지
- 상세페이지의 디자인과 화면 구성은 자유이나 아래 항목이 반드시 포함되도록 할 것
    - Todo의 ID
    - Todo의 제목
    - Todo의 내용
    - `이전으로` 버튼
        - `이전으로` 버튼을 구현하고, `이전으로` 버튼을 클릭하면 리스트 화면으로 되돌아 가도록 구현

#### 제한사항
- map을 사용할 때 **반드시 key**을 넣어야 하며, `map` 의 **index를 사용을 금지**
- Todo Id 생성 시 `todos.length` 사용해서 생성하지 않습니다. `todos.length` 을 사용해서 id 생성 시 **발생할 수 있는 문제점에 대해 고민**해볼 것

### 기타
- todos 모듈의 initialState 는 있어도 되고, 없어도 됩니다.

## Componets Tree
기능별로 컴포넌트 구분
 - App : 최상위 부모 컴포넌트, 기능 동작에 필요한 함수를 자녀 컴포넌트로 내려줌
 - InputAera : 데이터 입력을 수행하는 컴포넌트 
 - OutpotAera : 출력을 수행하는 컴포넌트 할일 목록을 출력해 보여주는 기능을 수행함

 ## File Tree
📦src
┣ 📂Pages
┃ ┣ 📜Home.jsx : 홈 페이지
┃ ┣ 📜Todo.jsx : 할일의 상세 페이지 
┃ ┗ 📜Todos.jsx : 할일의 인덱스를 표기하는 페이지
┣ 📂components
┃ ┣ 📜InputAera.jsx : 입력 받는 컴포넌트
┃ ┗ 📜OutputAera.jsx : 출력 컴포넌트
┣ 📂redux
┃ ┣ 📂config
┃ ┃ ┗ 📜configStore.js
┃ ┣ 📂modules
┃ ┗  ┗ 📜todo.js
┣ 📂shared
┃ ┗ 📜router.js
┣ 📜App.css
┣ 📜App.jsx
┗ 📜Style.jsx
