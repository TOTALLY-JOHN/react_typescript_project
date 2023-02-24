import React, { useState, useEffect } from 'react';

function ProfileComponent() {
  const [show, setShow] = useState(true);

  const removeJobComponent = () => {
    setShow(!show);
  }

  return (
    <div>
      <button type="button" onClick={removeJobComponent}>Remove Job Component</button>
      {show ? <JobComponent /> : null}
    </div>
  )
}

function JobComponent() {
  const [job, setJob] = useState("Developer");

  useEffect(() => {
    if (job === "Developer") {
      setTimeout(() => {
        setJob("Frontend Developer")
      }, 3000);
      console.log("Mount Job Component!");
    }
    else {
      console.log("Update Job Component!");

      return () => {
        console.log("Clear Job Component!");
      }
    }    
  }, [job]);

  return (
    <div>
      <h2>Job Title: 
        <span id="jobTitle">{job}</span>
      </h2>
    </div>
  )
}

export default ProfileComponent;