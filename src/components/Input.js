// import React from 'react'

// // class Input extends Component {
// //     constructor(props) {
// //       super(props)
    
// //       this.inputRef = React.createRef()
// //     }

// //     focusInput() {
// //         this.inputRef.current.focus ()
// //     }
// //   render() {
// //     return (
// //       <div>
// //         <input type="text" ref={this.inputRef} />
// //       </div>
// //     )
// //   }
// // }

// const Input = React.forwardRef((props, ref) => {
//   return (
//     <div>
//       <Input type='text' ref={ref} />
//     </div>
//   )
// })

// export default Input


//// try 

import React from 'react'

// function Input() {
//   return (
//     <div>
//       <input type='text'></input>
//     </div>
//   )
// }

const Input = React.forwardRef((props, ref)=>{
  return (
    <div>
      <input type='text' ref={ref} />
    </div>
  )
})

export default Input