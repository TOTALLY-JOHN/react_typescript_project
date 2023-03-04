import React, { useMemo, useState } from 'react';

function Counter() {
  const [name, setName] = useState("John");
  const [count, setCount] = useState(0);

  const getTotalSum = (number) => {
    console.log("게산 실행");
    for (let i = 0; i <= 1000000; i++) {
      number += i;
    }
    return number;
  };

  const calc = useMemo(() => getTotalSum(count), [count]);

  const increase = () => {
    setCount(count+1);
  };

  const changeName = (e) => {
    setName(e.target.value);
  }

  return (
    <div>
      <h2>Change Name: <input type="text" onChange={changeName}/></h2>
      <div>
        <h2>Current Name: {name}</h2>
      </div>
      <h2>Current Count: {count}</h2>
      <button type="button" onClick={increase}>Increase</button>
      <div>
        <h2>Total Sum from the count to 1000000</h2>
        <span>{calc}</span>
      </div>
    </div>
  );
}

export default Counter;