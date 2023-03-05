import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const increaseNumber = () => {
    setCount(count+1);
  };

  return (
    <div>
      Count: {count} <br />
      <button type="button" onClick={increaseNumber}>Increase</button>
    </div>
  );
}

export default Counter;