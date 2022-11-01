import React from 'react'

function Person({person}) {
  return (
    <div style={{padding:20}}>
        <h5 style={{padding:5}}>
        I am {person.name}. I am {person.age} years Old. I Know {person.skill}.
        </h5>
    </div>
  )
}

export default Person