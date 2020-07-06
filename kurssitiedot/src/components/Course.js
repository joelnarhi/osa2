import Header from './Header'
import Part from './Part'
import Total from './Total'
import React from 'react'

const Course = ({ course }) => {
  return (
    <>
    <Header course={course} />
    <Part course={course} />
    <Total course={course} />
    </>
  )
}

export default Course