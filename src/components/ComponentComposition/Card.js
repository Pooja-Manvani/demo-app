import React from 'react'

/**
 * @name Card
 * @param {*} props 
 * @returns Card
 */
export default function Card(props) {
    console.log(props.children)
    return (
    <div style={{backgroundColor:'lightcyan',textAlign:'center',padding:20,borderRadius:10,color:'gray',margin:10}}>
        <h1>{props.title}</h1>
        <div>{props.children}</div>
        <div style={{padding:10,color:'black',fontWeight:'bold',fontStyle:'italic'}}>
            Card Data.
            Card Data.
            Card Data.
            Card Data.
            Card Data.
            Card Data.
            Card Data.
            Card Data.
            Card Data.
            Card Data.
            Card Data.
            Card Data.
            Card Data.
            Card Data.
            Card Data.
            Card Data.
            Card Data.
            Card Data.
            Card Data.
            Card Data.
            Card Data.
            Card Data.
            Card Data.
            Card Data.
            Card Data.
        </div>
        
    </div>
  )
}
