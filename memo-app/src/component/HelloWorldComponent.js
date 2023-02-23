import React, { useState } from 'react';

function HelloWorldComponent() {
  const [userInfo, setUserInfo] = useState({});
  const [submittedUserResult, setSubmittedUserResult] = useState();

  const submitForm = (e) => {
    e.preventDefault();
    alert("Successfully submitted!");
    setSubmittedUserResult(
      <div className="submittedUserResult">
        <p>Last Name: {userInfo.lastName}</p>
        <p>First Name: {userInfo.firstName}</p>
        <p>Job: {userInfo.job}</p>
      </div>
    );
  }

  const showInputValue = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div>
      <h1>Form Submission</h1>
      <form onSubmit={submitForm} autoComplete='off'>
        Last Name: <input name="lastName" onChange={showInputValue} /> <br /><br />
        First Name: <input name="firstName" onChange={showInputValue} /> <br /><br />
        Job: <input name="job" onChange={showInputValue} /><br /><br /><br />
        <button type="submit">Submit</button>
      </form>
      <br />
      {submittedUserResult}
    </div>
  )
}

export default HelloWorldComponent;

