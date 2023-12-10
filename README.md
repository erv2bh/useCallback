# useCallback 함수 구현하기

useCallback(callback, dependencies)

매개변수
- callback : 캐싱할 함수값입니다. 이 함수는 어떤 인자나 반환값도 가질 수 있습니다. React는 첫 랜더링에서 이 함수를 반환합니다. 다음 랜더링에서 dependencies 값이 변경되었다면 이번 랜더링에서 전달한 함수를 반환하고 나중에 재사용할 수 있도록 저장합니다.
- dependencies: callback 내에서 참조되는 모든 반응형 값의 목록입니다. 반응형 값은 props와 state, 그리고 컴포넌트 안에서 직접 선언된 모든 변수와 함수를 포함합니다.

# 구현 방향
1. [React github] https://github.com/facebook/react/blob/40f653d13c363c6f81b13de67ce391991fb1f870/packages/react-reconciler/src/ReactFiberHooks.js#L3592 을 참고하여 기존 React라이브러리 내에 useCallback 이 어떻게 구현되었는지 파악합니다.
2. 바닐라코딩 컨텐츠의 예시를 이용하여 useCallback 리액트 프로젝트를 만듭니다.
3. custom useCallback 함수를 구현합니다.

# custom useCallback 함수 설명
1. `useRef`를 사용하여 컴포넌트 간에 상태를 유지합니다. 최초 랜더링 시에만 실행되게 하여 `callbackRef`에 `callback`함수, 의존성 배열, 그리고 memoized된 `callback`함수를 초기값으로 설정합니다.
2. 의존성 배열이 변경된 경우에 현재 의존성 배열을 업데이트 합니다.
3. 새로운 `callback` 함수로 memoized된 `callback`함수를 업데이트 합니다.
4. memoized 된 `callback`함수를 반환합니다.

<br>

# 실행방법
<br>

## 1. 프로젝트 클론받기!

터미널에서 아래의 Git 명령어를 이용하여 프로젝트를 클론(다운로드)!

```sh
git clone 프로젝트_GIT_URI
```

> 프로젝트\_GIT_URI는 Github useCallback 저장소의 메인 페이지에서 초록색 `<> Code` 버튼을 클릭하시면 확인할 수 있음!

<br>

## 2. 관련 의존성 패키지를 설치!

터미널의 useCallback 디렉토리 내에서 아래 명령어를 실행!

```sh
npm install
```

<br>

## 3. 로컬 서버 실행!
useCallback 디렉토리에서 아래 명령어를 실행!

```sh
npm run dev
```
<br>
<br>
<br>
