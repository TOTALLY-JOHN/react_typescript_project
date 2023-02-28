import React from 'react';
import { useRef } from 'react';

function UsernameComponent() {
  const usernameInput = useRef();
  
  const usernameFocus = () => {
    usernameInput.current.focus();
  }

  return (
    <div>
      <input type="text" ref={usernameInput} />
      <button type="button" onClick={usernameFocus}>Click</button> 
    </div>
  );
}

export default UsernameComponent;

