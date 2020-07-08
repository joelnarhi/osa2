import React from 'react'
import Header from './Header'


const Course= ({ courses }) => {

  return (
  courses.map((courses, i) => (
  <>
    <h2 key={i}>{courses.name}</h2>
    {courses.parts.map((c, i) => (
      <p key={i}>{c.name} {c.exercises}</p>
    ))}
    <p>Total of {courses.parts.map((number) => number.exercises).reduce((a,b) => a + b)} courses</p>
  </>
  ))
  )
}

export default Course