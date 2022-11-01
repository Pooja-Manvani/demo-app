import React from 'react';

function PropsGreet({name,heroname}) {
    return (
        <div>
            <h1>Hello {name} a.K.a {heroname}</h1>
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