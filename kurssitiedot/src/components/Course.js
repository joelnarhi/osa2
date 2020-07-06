import Header from './Header'
import Part from './Part'
import React from 'react'

const Course = ({ course }) => {
  return (
    <>
    <Header course={course} />
    <Part course={course} />
    </>
  )
}

export default Course