import React from 'react';
import Student from './Student';

function StudentComponent() {
  const students = [
    {id: 1, lastName: 'Andrew', firstName: 'Paul'},
    {id: 2, lastName: 'Brian', firstName: 'Wilson'},
    {id: 3, lastName: 'Catherine', firstName: 'Anna'}
  ];

  return (
    <div style={{textAlign:'left'}}>
      <h1>Student List</h1>
      <ol>
        {students.map((student) => <Student key={student.id} lastName={student.lastName} firstName={student.firstName} />)}
      </ol>
    </div>
  )
}

export default StudentComponent;