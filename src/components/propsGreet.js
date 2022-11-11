import React from 'react';

function PropsGreet({name,email}) {
    const props = {name,email}
    return (
        <div style={{width:'100%', overflow:'hidden',padding:20,textAlign:'center',fontWeight:'bold',fontSize:24}}>
            <p style={{color:'grey', padding:10, lineHeight:'1.5px'}}>
                Hello {props.name},
            </p>
            <p style={{color:'grey', padding:10, lineHeight:'1.5px'}}>
                 Your Email ID is 
            </p>
                 <p>{props.email}</p>
        </div>
    );
}


// second way to destructuring props:
// function PropsGreet(props) {
//     const {name,heroname} = props
//     return (
//         <div>
//             <h1>Hello {name} a.K.a {heroname}</h1>
//         </div>
//     );
// }

export default PropsGreet;