import React from 'react'

const Total = ({ course }) => {
  
  const total = course.parts.map((number) => number.exercises)
  
  const sum = total.reduce((a,b) => a + b)

  return (
    <p><b>Total of {sum} excercises</b></p>
  )
}

export default Total