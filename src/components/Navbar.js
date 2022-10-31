import { NavLink } from "react-router-dom"

export const Navbar = () => {
    
    return (
        <nav style={{padding:10,backgroundColor:'lightcyan'}}>
            <NavLink to='contactsList' style={{padding:10}}>Home</NavLink>
            <NavLink to='register' style={{padding:10}}>Register</NavLink>
        </nav>
    )
}