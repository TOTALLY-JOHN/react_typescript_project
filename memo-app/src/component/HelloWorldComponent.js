import React from 'react';

function HelloWorldComponent(props, {job = 'Developer'}) {
  return (
    <div>
      <h1>Information: {props.firstName} {props.lastName}({props.age}), Job: {job}</h1>
    </div>
  )
}

export default HelloWorldComponent;

