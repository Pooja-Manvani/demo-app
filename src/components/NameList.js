import React from 'react'
import Person from './Person'

function NameList() {

    // const names = ['pooja','Hiren','Nihu','jigs'];
    // const nameList = names.map((name, index) => <h2 key={index} >{index} { name } </h2>)

    const person = [
        {
            id:1,
            name: 'hiren',
            age: 30,
            skill: 'cricket'
        },
        {
            id:2,
            name: 'Pooja',
            age: 24,
            skill: 'coding'
        },
        {
            id:3,
            name: 'Niharika',
            age: 22,
            skill: 'Talking'
        },
    ]

    const personList = person.map(person => ( <Person key={person.id} person={person} />
    ))

  return (
    <div>
     {/* {
        names.map(name => 
            <h2> { name } </h2>
        )
     } */}


     {/* <div>{nameList}</div> */}

     {personList}
    </div>
  )
}

export default NameList