import { useState } from "react";
import "./App.css";

function App() {
  const initialArray = ["apple", "banana", "cherry", "date", "elderberry"];
  const [array, setArray] = useState(initialArray);
  const [result, setResult] = useState("");
  const [query, setQuery] = useState("");

  // 함수들
  const handleForEach = () => {
    let tempResult = "";
    array.forEach(function (fruit) {
      tempResult += `${fruit} ,`;
    });
    // tempResult = tempResult.slice(0, -2);
    // setResult(tempResult);
    setResult(tempResult.slice(0, -2));
  };

  const handleFilter = () => {
    const filteredList = array.filter(function (fruit) {
      // 얘를 필터링을 할지 말지를 결정한다.
      if (fruit.includes(query)) {
        return true;
      }
      return false; // 여기서 결정한다
    });
    setResult(filteredList.join(", "));
  };

  const handleMap = () => {
    // Map의 역할 -< 원본배열의 (가공) 복제....!!!
    const mappedList = array.map(function (fruit) {
      return fruit.toUpperCase();
    });
    setResult(mappedList.join(", "));
  };

  const handleReduce = () => {
    const reducedList = array.reduce(function (acc, cur) {
      return `${acc}, ${cur}`;
    });
    setResult(reducedList);
  };

  const handlePush = () => {
    // input 태그에 입력한 값이 결과의 끝에 달라붙도록!
    if (!query) {
      alert("값이 없습니다");
      return false;
    }
    const newArr = [...array, query];
    setArray(newArr);
    setResult(newArr.join(", "));
    // setResult(array.concat(`, ${query}`));
    // const newArr = [...array, query];
    // setArray(array);
    // setResult(newArr.concat(query).join(", "));
  };

  const handlePop = () => {
    const newArr = [...array];
    newArr.pop();
    setArray(newArr);
    setResult(newArr.join(", "));
  };

  const handleSlice = () => {
    const newArr = [...array];
    // setArray(newArr);
    setResult(newArr.slice(0, -2).join(", "));
  };
  const handleSplice = () => {
    const newArr = [...array];
    newArr.splice(2, 2, "kiwi", "lime");
    // setArray(array);
    setResult(newArr.join(", "));
  };
  const handleIndexOf = () => {
    const newArr = [...array];
    setResult(array.indexOf(query, newArr));
  };
  const handleIncludes = () => {
    const newArr = [...array];
    // setArray(newArr);
    setResult(array.includes(query, newArr) ? "true" : "false");
  };
  const handleFind = () => {
    setResult(array.find((e) => e.includes(query)) || "Not Found");
  };
  const handleSome = () => {
    setResult(array.some((e) => e.includes(query)).toString());
    console.log(array.some((e) => e));
  };
  const handleEvery = () => {
    setResult(array.every((e) => e.length > 5).toString());
    console.log(array.every((e) => e.length > 5));
  };
  const handleSort = () => {
    const newArr = [...array];
    setResult(
      newArr
        .sort(function (a, b) {
          return b - a;
        })
        .join(", ")
    );
  };
  const handleJoin = () => {
    setResult(array.join(", "));
  };

  return (
    <div>
      <h1>Array API Practice</h1>
      <div>
        <input
          value={query}
          onChange={function (e) {
            setQuery(e.target.value);
          }}
        />
      </div>
      <div>
        <button onClick={handleForEach}>forEach</button>
        <button onClick={handleFilter}>filter</button>
        <button onClick={handleMap}>map</button>
        <button onClick={handleReduce}>reduce</button>
        <button onClick={handlePush}>push</button>
        <button onClick={handlePop}>pop</button>
        <button onClick={handleSlice}>slice</button>
        <button onClick={handleSplice}>splice</button>
        <button onClick={handleIndexOf}>indexOf</button>
        <button onClick={handleIncludes}>includes</button>
        <button onClick={handleFind}>find</button>
        <button onClick={handleSome}>some</button>
        <button onClick={handleEvery}>every</button>
        <button onClick={handleSort}>sort</button>
        <button onClick={handleJoin}>join</button>
      </div>
      <div>
        <strong>Array</strong> : {initialArray.join(", ")}
      </div>
      <div>
        <strong>Result</strong> : {result}
      </div>
    </div>
  );
}

export default App;
