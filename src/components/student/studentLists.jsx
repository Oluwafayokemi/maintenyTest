import React from 'react'
const students = [
  {
    name: 'Grace',
    course: ['English', 'Mathematics', 'Crk']
  },
  {
    name: 'Comfort',
    course: ['English', 'Mathematics', 'Crk']
  },
  {
    name: 'Grace',
    course: ['English', 'Mathematics', 'Crk']
  },
  {
    name: 'Dainty',
    course: ['English', 'Mathematics', 'Crk']
  },
]
export const StudentList = () => {
  return (
    <React.Fragment>
      {students.map(student => (
        <li>
          <ul>Name: {student.name}</ul>
          <ul>Course: {student.course.length}</ul>
        </li>
      ))
      }
    </React.Fragment>
  )
}