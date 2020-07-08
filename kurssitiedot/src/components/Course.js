import React from 'react'
import Header from './Header'


const Course= ({ courses }) => {

  return (
  courses.map((courses, i) => (
  <div key={i}>
    <h2 key={courses.id}>{courses.name}</h2>
    {courses.parts.map((c, i) => (
      <p key={c.id}>{c.name} {c.exercises}</p>
    ))}
    <p>Total of {courses.parts.map((number) => number.exercises).reduce((a,b) => a + b)} courses</p>
  </div>
  ))
  )
}

export default Course