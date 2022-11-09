import React from 'react'

/**
 * @name Card
 * @param {*} props 
 * @returns Card
 */
export default function Card(props) {
    // console.log(props.children)ks
    return (
    <div style={{backgroundColor:'lightcyan',textAlign:'center',padding:20,borderRadius:10,color:'gray',margin:10,overflow:'hidden',height:'100%'}}>
        <h1>{props.title}</h1>
        <div style={{overflow:'hidden',height:'100%'}}>{props.children}</div>
        
        
    </div>
  )
}
