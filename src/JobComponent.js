import React from 'react';

function JobComponent(props) {
  return (
    <div>
      <h1> Company Name: {props.company_name}</h1>
      <h1> Salary: {props.salary}</h1>
      <h1>Position: {props.position}</h1>
    </div>
  );
}

export default JobComponent;
