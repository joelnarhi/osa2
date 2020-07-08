import React from 'react'

const Header = ({ courses }) => {
    return (
        courses.map(courses => <h1 key={courses.id}>{courses.name}</h1>)
    )
} 

export default Header