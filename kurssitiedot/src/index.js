import React from 'react';
import ReactDOM from 'react-dom';

function sum (x) {
  return x.reduce((a,b) => a + b, 0)
}

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
  

const App = () => {
    const courses = [
      {
        name: 'Half Stack application development',
        id: 1,
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10,
            id: 1
          },
          {
            name: 'Using props to pass data',
            exercises: 7,
            id: 2
          },
          {
            name: 'State of a component',
            exercises: 14,
            id: 3
          },
          {
            name: 'Redux',
            exercises: 11,
            id: 4
          }
        ]
      }, 
      {
        name: 'Node.js',
        id: 2,
        parts: [
          {
            name: 'Routing',
            exercises: 3,
            id: 1
          },
          {
            name: 'Middlewares',
            exercises: 7,
            id: 2
          }
        ]
      }
    ]


    


    return (
      <div>
        <h1>Web development curriculum</h1>
        <Course courses={courses} />
        

      </div>
    )
  }


ReactDOM.render(<App />, document.getElementById('root'))