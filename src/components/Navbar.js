import { NavLink } from "react-router-dom"

export const Navbar = () => {
    
    return (
        <nav style={{padding:10,backgroundColor:'lightcyan',flexWrap:'wrap',flexDirection:'column',flex:1}}>
            <NavLink to='contactsList' style={{padding:10}}>Home</NavLink>
            <NavLink to='register' style={{padding:10}}>Register</NavLink>
            <NavLink to='greet' style={{padding:10}}>Greet</NavLink>
            <NavLink to='count' style={{padding:10}}>Counter</NavLink>
            <NavLink to='functionClick' style={{padding:10}}>FunctionClick</NavLink>
            <NavLink to='eventbind' style={{padding:10}}>EventBind</NavLink>
            <NavLink to='methodAsProps' style={{padding:10}}>MethodAsProps</NavLink>
            <NavLink to='userGreet' style={{padding:10}}>UserGreeting</NavLink>
            <NavLink to='nameList' style={{padding:10}}>ListRendering</NavLink>
        </nav>
    )
}