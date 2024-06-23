# 프론트엔드 직무 과제

작업인원: 1명 (윤도진)

작업기한: 2일 (2024-06-22 ~ 2024-06-23)

작업환경:

Language: javascript + typescript 

Framework: Vue 3.x

OS: MAC OS

IDE: Intellij Ultimate

사용한 플러그인:

Pinia: 상태관리 라이브러리, 유저회원가입 state 데이터를 관리하기위해  
pinia-plugin-persistedstate: Pinia state 데이터를 sessionStorage에 저장하기 위해

https://pinia.vuejs.kr/introduction (pinia)

https://prazdevs.github.io/pinia-plugin-persistedstate/ (pinia-plugin-persistedstate)

결과물:회원 가입 페이지 구현


1. 회원가입은 1.개인정보입력 → 2.배송지정보입력 → 3.결재정보입력 3단계의 화면으로 구성된다.


- CSR 방식 및 동적 컴포넌트로 구현
  #### src/components/views/HomeView.vue

2. 현재 단계를 입력하지 않은 경우 다음 단계로 이동할 수 없으며, 이전 단계로 이동할 경우에는 이전 단계에서 사용자가 입력한 정보가 저장되어 있어야 한다.
- Pinia를 이용하여 유저 회원가입 상태데이터들을 저장 및 관리  
- Pinia, Vue composition API 를 활용해서 컴포넌트 이동 처리 
- keep-alive 를 활용하여 컴포넌트 재 렌더링 방지
- v-model, Pinia 를 활용하여 데이터 양방향 바인딩
  #### src/stores/signUpForm.ts, src/stores/stepCounter.ts
3. 각 입력 정보마다 입력된 값이 다음의 조건을 만족하는지 체크하며, 조건을 만족하지 않은 경우 인풋창 아래 경고 메세지를 출력한다.
- 정규식 및 input 이벤트를 활용하여 사용자 입력값 체크
- v-if 조건부 렌더링을 이용하여 경고 메시지 출력.
  #### src/stores/signUpForm.ts, src/js/composition/signUp.ts, src/js/common/utils.ts 
4. 각 단계의 모든 정보를 입력한 경우에만 회원 가입 완료 제출이 가능하다. 모든 입력값의 타입 체크를 통과한 경우, 입력한 정보를 보여주는 회원가입 완료 페이지로 이동한다.
- 결재정보 Step 컴포넌트 "완료" 버튼 클릭시, signUpForm store 상태값 유효성 체크 및 미비된 항목이 있는 컴포넌트로 이동처리 
  #### src/stores/signUpForm.ts, src/js/composition/signUp.ts, src/js/composition/stepCounter.ts
### 프로젝트 세팅

```sh
npm install
```

### 프로젝트 실행

```sh
npm run dev
```
