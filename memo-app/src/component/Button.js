import React from 'react';

function Button({func}) {
  console.log("Button rendered!");
  return (
    <button onClick={func}>
      Update
    </button>
  )
}

export default React.memo(Button);
