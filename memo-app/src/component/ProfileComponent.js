import React from 'react'

class ProfileComponent extends React.Component {
  constructor() {
    super();
    this.state = {show: true};
  }

  removeComponent = () => {
    this.setState({show: false});
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.removeComponent}>Remove Job Component</button>
        {this.state.show ? <JobComponent /> : null}
      </div>
    )
  }
}

class JobComponent extends React.Component {
  constructor() {
    super();
    this.state = {job: "Developer"};
  }

  // 컴포넌트가 렌더링된 후에 호출
  componentDidMount() {
    console.log("componentDidMount: 마운트 실행");
    setTimeout(() => {
      this.setState({job: "Frontend Developer"});
    }, 3000);
  }

  // DOM에서 컴포넌트가 업데이트된 후에 호출
  componentDidUpdate() {
    document.getElementById("jobTitle").innerHTML = this.state.job;
    console.log("componentDidUpdate: 컴포넌트 업데이트 완료");
  }

  // DOM에서 컴포넌트가 제거될 때 호출
  componentWillUnmount() {
    console.log("componentWillUnmount: 컴포넌트 마운트 해제, 컴포넌트 제거");
  }

  render() {    
    return (
      <div>
        <h2>Job Title: 
          <span id="jobTitle"></span>
        </h2>
      </div>
    )
  }
}

export default ProfileComponent;