import { useState, useRef, memo } from "react";

function useCallback(callback, dependencies) {
  const callbackRef = useRef(null);

  if (!callbackRef.current) {
    callbackRef.current = { callback, dependencies, memoizedCallback: callback };
  }

  if (!isDepsEqual(dependencies, callbackRef.current.dependencies)) {
    callbackRef.current.dependencies = dependencies;
    callbackRef.current.memoizedCallback = callback;
  }

  return callbackRef.current.memoizedCallback;
}

function isDepsEqual(oldDependencies, newDependencies) {
  if (oldDependencies === newDependencies) {
    return true;
  }

  for (let i = 0; i < oldDependencies.length; i++) {
    if (oldDependencies[i] !== newDependencies[i]) {
      return false;
    }
  }

  return true;
}

function Button({ onClick }) {
  console.log("Button rendering..");

  return (
    <button onClick={onClick}>증가</button>
  );
}

const ButtonMemo = memo(Button);

export default function App() {
  const [age, setAge] = useState(2);

  console.log("App rendering..");

  const increment = useCallback(() => setAge(age => age + 1), []);

  return (
    <>
      <h1>저는 {age}살 입니다.</h1>
      <ButtonMemo onClick={increment} />
    </>
  );
}
