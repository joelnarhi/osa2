import React from 'react'
import Header from './Header'
import Total from './Total'
import Part from './Part'


const Course = ({ courses }) => {
  return (
    <>
    <Header courses={courses} />
    <Part courses={courses} />
    
    </>
  )
}

/* <Part courses={courses} />
    <Total courses={courses} /> */

export default Course