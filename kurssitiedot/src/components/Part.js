import React from 'react'

const Part = ({ courses }) => {
  
  const parts = courses.map((parts) => parts)
  console.log('Part', parts)

  return (
       parts.map(part => 
        <p key={part.id}>{part.name} {part.exercises}</p>)
  )
}
/*
courses.map(courses => <h1 key={courses.id}>{courses.name}</h1>)
*/

export default Part